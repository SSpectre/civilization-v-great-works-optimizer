import {civList} from './civList'

interface GreatWorkProps {
    workNumber: number;
    updateGreatWork: (id: number, property: string, name: string) => void;
}

export default function GreatWork({workNumber, updateGreatWork}: Readonly<GreatWorkProps>) {
    const workID = workNumber;

    const handleRename = (event: React.FocusEvent<HTMLInputElement>) => {
        updateGreatWork(workID, "name", event.target.value);
    }

    const handleUpdate = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const eventTarget = event.target.id;
        const dashIndex = eventTarget.indexOf("-");
        updateGreatWork(workID, eventTarget.substring(0, dashIndex), event.target.value);
    }

    const civilizationOptions = civList.map(civ => {
        let capitalized = civ[0].toUpperCase() + civ.substring(1);

        return <option key={civ} value={civ}>{capitalized}</option>
    });
    
    return(
        <tr>
            <td>
                <input type="text" id={"work-" + workNumber} name={"work-" + workNumber} placeholder={"Work " + workNumber} onBlur={handleRename} />
            </td>
            <td>
                <select name={"type-select-" + workNumber} id={"type-select-" + workNumber} defaultValue={""} onChange={handleUpdate}>
                    <option value="" disabled>Select</option>
                    <option value="writing">Writing</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="artifact">Artifact</option>
                </select>
            </td>
            <td>
                <select name={"civilization-select-" + workNumber} id={"civilization-" + workNumber} defaultValue={""} onChange={handleUpdate}>
                    <option value="" disabled>Select</option>
                    {civilizationOptions}
            </select>
            </td>
            <td>
                <select name={"era-select-" + workNumber} id={"era-select-" + workNumber} defaultValue={""} onChange={handleUpdate}>
                    <option value="" disabled>Select</option>
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