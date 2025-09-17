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

    const cityStateOptions = Options.cityStateList.map(state => {
        const regex = /[ \-]/;
        let formatted;
        if (state === "m'banza-kongo") {
            formatted = state;
        }
        else {
            formatted = state.replaceAll("-", " ");
        }

        formatted = formatted[0].toUpperCase() + formatted.substring(1);

        //capitalize the first letter after each space or hyphen
        let startIndex = 0;
        let index;
        do {
            index = formatted.substring(startIndex).search(regex) + 1;
            let adjustedIndex: number = index + startIndex;

            formatted = formatted.substring(0, adjustedIndex) + formatted[adjustedIndex].toUpperCase() + formatted.substring(adjustedIndex + 1);
            startIndex = adjustedIndex;
        }
        while (index > 0);

        return <option key={state} value={state}>{formatted}</option>
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
                    <option value="states" disabled>---City States---</option>
                    {cityStateOptions}
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