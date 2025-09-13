import { useState } from 'react'
import { buildingList } from "./buildingList";

interface CityProps {
    cityNumber: number;
    renameCity: (id:number, name:string) => void;
}

export default function City({cityNumber, renameCity}: Readonly<CityProps>) {
    const id = cityNumber;

    const buildingElements = buildingList.map(building => {
        let selectType = building.radio ? "radio" : "checkbox";

        return (
            <td key={building.name}>
                <input type={selectType} id={building.name + "-" + id} name={building.name} />
            </td>
        )
    })

    const handleRename = (event: React.FocusEvent<HTMLInputElement>) => {
        renameCity(id, event.target.value);
    }

    return(
        <tr>
            <td>
                <input type="text" id={"city-" + id} name={"city-" + id} placeholder={"City " + id} onBlur={handleRename} />
            </td>
            {buildingElements}
        </tr>
    );
}