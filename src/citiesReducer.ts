import { City } from "./Types";
import { buildingList } from "./optionLists";

type CitiesAction =
    | {type: "add"; cityNumber: number}
    | {type: "remove"; cityNumber: number}
    | {type: "rename"; id: number, name: string}
    | {type: "changeBuilding"; cityID: number; name: string}
    | {type: "reset"}

export default function citiesReducer(cities:City[], action: CitiesAction): City[] {
    switch (action.type) {
        case "add": {
            return [...cities, { id: action.cityNumber + 1, name: "", buildings: [], multiplier: 1 }]
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
                                                            name: action.name,
                                                            greatWorkType: buildingProperties.type,
                                                            slots: buildingProperties.slots,
                                                            multiplierBonus: buildingProperties.multiplierBonus
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
        case "reset": {
            return [];
        }
        default: {
            throw new Error("Unknown cities action");
        }
    }
}