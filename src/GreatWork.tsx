import * as Options from './optionLists'

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

    const civilizationOptions = Options.civList.map(civ => {
        let capitalized = civ[0].toUpperCase() + civ.substring(1);

        return <option key={civ} value={civ}>{capitalized}</option>
    });

    const typeOptions = Options.greatWorkTypeList.map(type => {
        let capitalized = type[0].toUpperCase() + type.substring(1);

        return <option key={type} value={type}>{capitalized}</option>
    });

    const eraOptions = Options.eraList.map(era => {
        let capitalized = era[0].toUpperCase() + era.substring(1);

        return <option key={era} value={era}>{capitalized}</option>
    });
    
    return(
        <tr>
            <td>
                <input type="text" id={"work-" + workNumber} name={"work-" + workNumber} placeholder={"Work " + workNumber} onBlur={handleRename} />
            </td>
            <td>
                <select name={"type-select-" + workNumber} id={"type-select-" + workNumber} defaultValue={""} onChange={handleUpdate}>
                    <option value="" disabled>Select</option>
                    {typeOptions}
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
                    {eraOptions}
                </select>
            </td>
        </tr>
    );
}