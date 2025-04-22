import { useState, useRef } from 'react'
import './App.css'
import GreatWorksTable from './GreatWorksTable'
import CitiesTable from './CitiesTable'
import CivilizationSelect from './CivilizationSelect'

function App() {
    const defaultCityNumber: number = 1;
    const defaultWorkNumber: number = 0;

    const defaultGreatWorkTypes: {[key: string]: number} = {
        writing: 0,
        art: 0,
        music: 0,
        artifact: 0
    };

    const defaultSlots: {[key: string]: number} = defaultGreatWorkTypes;

    const [cityNumber, setCityNumber] = useState(defaultCityNumber);

    const [workNumber, setWorkNumber] = useState(defaultWorkNumber);
    const [greatWorkTypes, setGreatWorkTypes] = useState(defaultGreatWorkTypes);

    let lastWorkType = useRef("");

    function addCity() {
        setCityNumber(cityNumber + 1);
    }

    function removeCity() {
        if (cityNumber > defaultCityNumber) {
            setCityNumber(cityNumber - 1);
        }
    }

    function addGreatWork() {
        setWorkNumber(workNumber + 1);
        lastWorkType.current = "";
    }

    function removeGreatWork() {
        if (workNumber > defaultWorkNumber) {
            setWorkNumber(workNumber - 1);

            if (lastWorkType.current != "") {
                let totals = greatWorkTypes;
                totals[lastWorkType.current]--;

                setGreatWorkTypes(totals);
            }
        }
    }

    function selectGreatWorkType(value: string, oldValue: string, tableRow: number) {
        let totals = greatWorkTypes;

        totals[value]++;
        if (oldValue != "") {
            totals[oldValue]--;
        }

        setGreatWorkTypes(totals);

        if (tableRow == workNumber) {
            lastWorkType.current = value;
        }

        alert(greatWorkTypes["writing"] + ", " + greatWorkTypes["art"] + ", " + greatWorkTypes["music"] + ", " + greatWorkTypes["artifact"]);
    }

    function reset() {
        setCityNumber(defaultCityNumber);

        setWorkNumber(defaultWorkNumber);
        let workTypes = Object.keys(greatWorkTypes);
        workTypes.forEach((key) => greatWorkTypes[key] = defaultWorkNumber);
    }

    return (
        <div>
            <label htmlFor='civilization-select'>Your civilization: </label>
            <CivilizationSelect name={"civilization-select"}/>
            <button onClick={reset}>Reset</button>
            <CitiesTable defaultCityNumber={defaultCityNumber} cityNumber={cityNumber} addCity={addCity} removeCity={removeCity} />
            <GreatWorksTable defaultWorkNumber={defaultWorkNumber} workNumber={workNumber} addGreatWork={addGreatWork} removeGreatWork={removeGreatWork}
                selectGreatWorkType={selectGreatWorkType} />
        </div>
    );
}

export default App
