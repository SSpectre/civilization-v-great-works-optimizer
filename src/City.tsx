import { buildingList } from "./optionLists";

interface CityProps {
    cityNumber: number;
    renameCity: (id:number, name:string) => void;
    changeBuilding: (cityID: number, name: string) => void;
}

export default function City({cityNumber, renameCity, changeBuilding}: Readonly<CityProps>) {
    const cityID = cityNumber;

    const handleRename = (event: React.FocusEvent<HTMLInputElement>) => {
        renameCity(cityID, event.target.value);
    }

    const handleBuildingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeBuilding(cityID, event.target.name);
    }

    const buildingElements = buildingList.map(building => {
        let selectType = building.radio ? "radio" : "checkbox";

        return (
            <td key={building.name}>
                <input type={selectType} id={building.name + "-" + cityID} name={building.name} onChange={handleBuildingChange} />
            </td>
        )
    })

    return(
        <tr>
            <td>
                <input type="text" id={"city-" + cityID} name={"city-" + cityID} placeholder={"City " + cityID} onBlur={handleRename} />
            </td>
            {buildingElements}
        </tr>
    );
}