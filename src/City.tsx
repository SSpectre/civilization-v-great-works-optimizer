import { buildingList } from "./buildingList";

export default function City({cityNumber}: Readonly<{cityNumber: number}>) {
    const buildings = buildingList.map(building => {
        let selectType = building.radio ? "radio" : "checkbox";

        return (
            <td key={building.name}>
                <input type={selectType} id={building.name + "-" + selectType + "-" + cityNumber} name={building.name + "-" + selectType} />
            </td>
        )
    })

    return(
        <tr>
            <td>
                <input type="text" id={"city-" + cityNumber} name={"city-" + cityNumber} placeholder={"City " + cityNumber} />
            </td>
            {buildings}
        </tr>
    );
}