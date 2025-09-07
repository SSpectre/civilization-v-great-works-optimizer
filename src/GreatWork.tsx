import CivilizationSelect from "./CivilizationSelect"

export default function GreatWork({workNumber}: Readonly<{workNumber: number}>) {
    return(
        <tr>
            <td>
                <input type="text" id={"work-" + workNumber} name={"work-" + workNumber} placeholder={"Work " + workNumber} />
            </td>
            <td>
                <select name={"type-select-" + workNumber} id={"type-select-" + workNumber}>
                    <option value="" disabled selected>Select</option>
                    <option value="writing">Writing</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="artifact">Artifact</option>
                </select>
            </td>
            <td>
                <CivilizationSelect name={"civilization-select-" + workNumber}/>
            </td>
            <td>
                <select name={"era-select-" + workNumber} id={"era-select-" + workNumber}>
                    <option value="" disabled selected>Select</option>
                    <option value="ancient">Ancient</option>
                    <option value="classical">Classical</option>
                    <option value="medieval">Medieval</option>
                    <option value="renaissance">Renaissance</option>
                    <option value="industrial">Industrial</option>
                    <option value="modern">Modern</option>
                    <option value="atomic">Atomic</option>
                    <option value="information">Information</option>
                </select>
            </td>
        </tr>
    );
}