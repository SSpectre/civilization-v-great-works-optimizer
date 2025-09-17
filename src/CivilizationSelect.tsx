import {civList} from './optionLists'

interface CivilizationSelectProps {
    name: string;
    selectCivilization: (civ:string) => void;
}

export default function CivilizationSelect({name, selectCivilization}: Readonly<CivilizationSelectProps>) {
    const options = civList.map(civ => {
        let capitalized = civ[0].toUpperCase() + civ.substring(1);

        return <option key={civ} value={civ}>{capitalized}</option>
    });

    const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        selectCivilization(event.target.value);
    }

    return (
        <select name={name} id={name} defaultValue={""} onChange={handleSelection}>
            <option value="" disabled>Select</option>
            {options}
        </select>
    );
}