import { useState, useRef } from 'react'
import './App.css'
import GreatWorksTable from './GreatWorksTable'
import CitiesTable from './CitiesTable'
import CivilizationSelect from './CivilizationSelect'

export default function App() {
    const defaultCityNumber: number = 1;
    const [cityNumber, setCityNumber] = useState(defaultCityNumber);

    const defaultWorkNumber: number = 0;
    const [workNumber, setWorkNumber] = useState(defaultWorkNumber);

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
    }

    function removeGreatWork() {
        if (workNumber > defaultWorkNumber) {
            setWorkNumber(workNumber - 1);
        }
    }

    function reset() {
        setCityNumber(defaultCityNumber);
        setWorkNumber(defaultWorkNumber);
    }

    return (
        <div>
            <label htmlFor='civilization-select'>Your civilization: </label>
            <CivilizationSelect name={"civilization-select"}/>
            <button onClick={reset}>Reset</button>
            <CitiesTable cityNumber={cityNumber} defaultCityNumber={defaultCityNumber} addCity={addCity} removeCity={removeCity} />
            <GreatWorksTable workNumber={workNumber} defaultWorkNumber={defaultWorkNumber} addGreatWork={addGreatWork} removeGreatWork={removeGreatWork} />
        </div>
    );
}
