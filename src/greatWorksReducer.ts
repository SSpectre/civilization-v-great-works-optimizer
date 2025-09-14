import { GreatWork } from "./Types";

type GreatWorksAction =
    | {type: "add"; workNumber: number}
    | {type: "remove"; workNumber: number}
    | {type: "update"; id: number, property: string, value: string}
    | {type: "reset"}

export default function greatWorksReducer(works:GreatWork[], action:GreatWorksAction) {
    switch (action.type) {
        case "add": {
            return [...works, { id: action.workNumber + 1, name: "", type: "", civilization: "", era: "" }];
        }
        case "remove": {
            return works.filter(work => work.id !== action.workNumber);
        }
        case "update": {
            return works.map(work => {
                if (work.id === action.id) {
                    return {...work, [action.property]: action.value};
                }
                else {
                    return work;
                }
            })
        }
        case "reset": {
            return [];
        }
        default: {
            throw new Error("Unknown great works action")
        }
    }
}