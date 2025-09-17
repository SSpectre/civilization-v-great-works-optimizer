import { City, Building } from "./Types";

type CitiesAction =
    | {type: "add"; cityNumber: number}
    | {type: "remove"; cityNumber: number}
    | {type: "rename"; id: number, name: string}
    | {type: "changeBuilding"; cityID: number; name: string}
    | {type: "reset"}

export default function citiesReducer(cities:City[], action: CitiesAction): City[] {
    switch (action.type) {
        case "add": {
            return [...cities, { id: action.cityNumber + 1, name: "", buildings: [] }]
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
                    if (city.buildings.find(building => building.name === action.name)) {
                        return {...city, buildings: city.buildings.filter(building => building.name !== action.name)}
                    }
                    else {
                        return {...city, buildings: [...city.buildings, {name: action.name, greatWorkType: "building", slots: 0}]}
                    }
                }
                else {
                    return city;
                }
            })
        }
        case "reset": {
            return [];
        }
        default: {
            throw new Error("Unknown cities action");
        }
    }
}