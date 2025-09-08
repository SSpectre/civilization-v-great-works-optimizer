import {civList} from './civList'

export default function CivilizationSelect({name}: Readonly<{name: string}>) {
    const options = civList.map(civ => {
        let capitalized = civ[0].toUpperCase() + civ.substring(1);

        return <option key={civ} value={civ}>{capitalized}</option>
    });

    return (
        <select name={name} id={name} defaultValue={""}>
            <option value="" disabled>Select</option>
            {options}
        </select>
    );
}