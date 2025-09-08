import { useState } from 'react'
import { buildingList } from "./buildingList";

export default function City({cityNumber}: Readonly<{cityNumber: number}>) {
    let defaultBuildings = buildingList.map(building => {
        return {name: building.name, checked: false};
    })

    const [buildings, setBuildings] = useState(defaultBuildings);

    const buildingElements = buildingList.map(building => {
        let selectType = building.radio ? "radio" : "checkbox";

        return (
            <td key={building.name}>
                <input type={selectType} id={building.name + "-" + cityNumber} name={building.name} onChange={() => checkBuilding(building.name, selectType)}/>
            </td>
        )
    })

    const checkBuilding = (name:string, type:string) => {
        const newBuildings = [...buildings];
        if (type === "radio") {
            newBuildings.forEach(building => building.checked)
        }

        let changedBuilding = newBuildings.find(building => building.name === name);
        if (changedBuilding) {
            changedBuilding.checked = !changedBuilding.checked;
        }
        
        setBuildings(newBuildings)
    }

    return(
        <tr>
            <td>
                <input type="text" id={"city-" + cityNumber} name={"city-" + cityNumber} placeholder={"City " + cityNumber} />
            </td>
            {buildingElements}
        </tr>
    );
}