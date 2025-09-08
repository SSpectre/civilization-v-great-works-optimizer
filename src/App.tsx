import { useState, useRef } from 'react'
import './App.css'
import GreatWorksTable from './GreatWorksTable'
import CitiesTable from './CitiesTable'
import CivilizationSelect from './CivilizationSelect'

export default function App() {
    const [cityNumber, setCityNumber] = useState(0);
    const [workNumber, setWorkNumber] = useState(0);

    function addCity() {
        setCityNumber(cityNumber + 1);
    }

    function removeCity() {
        if (cityNumber > 0) {
            setCityNumber(cityNumber - 1);
        }
    }

    function addGreatWork() {
        if (cityNumber > 0) {
            setWorkNumber(workNumber + 1);
        }
        else {
            alert("Cities must be added before great works.");
        }
    }

    function removeGreatWork() {
        if (workNumber > 0) {
            setWorkNumber(workNumber - 1);
        }
    }

    function reset() {
        setCityNumber(0);
        setWorkNumber(0);
    }

    return (
        <div>
            <label htmlFor='civilization-select'>Your civilization: </label>
            <CivilizationSelect name={"civilization-select"}/>
            <button onClick={reset}>Reset</button>
            <CitiesTable cityNumber={cityNumber} addCity={addCity} removeCity={removeCity} />
            <GreatWorksTable workNumber={workNumber} addGreatWork={addGreatWork} removeGreatWork={removeGreatWork} />
        </div>
    );
}
