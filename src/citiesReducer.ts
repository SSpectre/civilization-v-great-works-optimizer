import { City, Instruction, ThemingCondition } from "./Types";
import { buildingList } from "./optionLists";

type CitiesAction =
    | {type: "add"; cityNumber: number}
    | {type: "remove"; cityNumber: number}
    | {type: "rename"; id: number, name: string}
    | {type: "changeBuilding"; cityID: number; name: string}
    | {type: "buildInstructions"; cityID: number; building: string}
    | {type: "reset"}

export default function citiesReducer(cities:City[], action: CitiesAction): City[] {
    switch (action.type) {
        case "add": {
            return [...cities, { id: action.cityNumber + 1, name: "City " + (action.cityNumber + 1), buildings: [], multiplier: 1 }]
        }
        case "remove": {
            return cities.filter(city => city.id !== action.cityNumber)
        }
        case "rename": {
            return cities.map(city => {
                if (city.id === action.id) {
                    return {...city, name: action.name};
                }
                else {
                    return city;
                }
            })
        }
        case "changeBuilding": {
            return cities.map(city => {
                if (city.id === action.cityID) {
                    let foundBuilding = city.buildings.find(building => building.name === action.name)
                    if (foundBuilding) {
                        //target city already has building; uncheck checkbox
                        let multiplier = city.multiplier - foundBuilding.multiplierBonus;
                        return {...city, buildings: city.buildings.filter(building => building.name !== action.name), multiplier: multiplier};
                    }
                    else {
                        //target city does not have building; add it
                        let buildingProperties = buildingList.find(building => building.name === action.name);
                        if (buildingProperties) {
                            let multiplier = city.multiplier + buildingProperties.multiplierBonus;
                            return {
                                        ...city,
                                        buildings: [
                                            ...city.buildings,
                                            {
                                                id: ((city.id - 1) * 22) + city.buildings.length + 1,
                                                name: action.name,
                                                greatWorkType: buildingProperties.type,
                                                slots: buildingProperties.slots,
                                                multiplierBonus: buildingProperties.multiplierBonus,
                                                themingBonus: buildingProperties.themingBonus,
                                                cityID: city.id,
                                                greatWorks: new Array(buildingProperties.slots),
                                                instructions: []
                                            }
                                        ],
                                        multiplier: multiplier
                                    }
                        }
                        else {
                            return city;
                        }
                    }
                }
                else {
                    let radioCheck = buildingList.find(building => building.name === action.name)
                    if (radioCheck && radioCheck.radio === 1) {
                        //non-target city already has building and building is a radio button; uncheck
                        return {...city, buildings: city.buildings.filter(building => building.name !== action.name)}
                    }
                    else {
                        //non-target city, not a radio button; no change
                        return city;
                    }
                }
            });
        }
        case "buildInstructions": {
            return cities.map(city => {
                if (city.id === action.cityID) {
                    let foundBuilding = city.buildings.find(building => building.name === action.building);
                    if (foundBuilding) {
                        let instructions: Instruction[] = []
                        for (let i = 1; i < foundBuilding.slots + 1; i++) {
                            //number of works
                            let tourism = 2 * i;

                            for (let j = 1; j <= 3; j += 0.5) {
                                //multiplier bonus
                                let tourismCopy = tourism * j;
                                instructions.push({
                                    tourism: tourismCopy,
                                    greatWorks: i,
                                    multiplier: j,
                                    themingCondition: ThemingCondition.Unfulfilled,
                                    aestheticsBonus: 1,
                                    buildingID: foundBuilding.id
                                });

                                if (i === foundBuilding.slots && foundBuilding.themingBonus > 0) {
                                    //museums can have partial theming bonuses, need to add instructions for each half before adding normal theming bonus instructions
                                    if (foundBuilding.name === "museum") {
                                        for (let k = ThemingCondition.FirstHalfFulfilled; k < ThemingCondition.SecondHalfFulfilled + 1; k++) {
                                            //with theming bonus
                                            tourismCopy += foundBuilding.themingBonus * 0.5;
                                            instructions.push({
                                                tourism: tourismCopy,
                                                greatWorks: i,
                                                multiplier: j,
                                                themingCondition: k,
                                                aestheticsBonus: 1,
                                                buildingID: foundBuilding.id
                                            });

                                            //with aesthetics bonus
                                            tourismCopy += foundBuilding.themingBonus * 0.5;
                                            instructions.push({
                                                tourism: tourismCopy,
                                                greatWorks: i,
                                                multiplier: j,
                                                themingCondition: k,
                                                aestheticsBonus: 2,
                                                buildingID: foundBuilding.id
                                            });

                                            tourismCopy -= foundBuilding.themingBonus;
                                        }
                                    }
                                    
                                    //with theming bonus
                                    tourismCopy += foundBuilding.themingBonus;
                                    instructions.push({
                                        tourism: tourismCopy,
                                        greatWorks: i,
                                        multiplier: j,
                                        themingCondition: ThemingCondition.Fulfilled,
                                        aestheticsBonus: 1, 
                                        buildingID: foundBuilding.id
                                    });

                                    //with aesthetics bonus
                                    tourismCopy += foundBuilding.themingBonus;
                                    instructions.push({
                                        tourism: tourismCopy,
                                        greatWorks: i,
                                        multiplier: j,
                                        themingCondition: ThemingCondition.Fulfilled,
                                        aestheticsBonus: 2, 
                                        buildingID: foundBuilding.id
                                    });
                                }
                            }
                        }

                        instructions.sort((a, b) => b.tourism - a.tourism);

                        return {
                            ...city,
                            buildings: city.buildings.map(building => {
                                if (building.name === foundBuilding.name) {
                                    return {...building, instructions: instructions};
                                }
                                else {
                                    return building;
                                }
                            })
                        };
                    }
                    else {
                        return city;
                    }
                }
                else {
                    return city;
                }
            });
        }
        case "reset": {
            return [];
        }
        default: {
            throw new Error("Unknown cities action");
        }
    }
}