import { useState, useRef } from 'react'
import './App.css'
import GreatWorksTable from './GreatWorksTable'
import CitiesTable from './CitiesTable'
import CivilizationSelect from './CivilizationSelect'

type City = {
    id: number;
    name: string;
    buildings: Building[];
}

type Building = {
    id: number;
    name: string;
}

type GreatWork = {
    id: number;
    name: string;
    type: string;
    civilization: string;
    era: string;
}

export default function App() {
    const [cityNumber, setCityNumber] = useState(0);
    const [workNumber, setWorkNumber] = useState(0);

    const [cities, setCities] = useState<City[]>([]);
    const [buildings, setBuildings] = useState<Building[]>([]);

    const [works, setWorks] = useState<GreatWork[]>([]);

    function addCity() {
        setCities(
            [
                ...cities,
                { id: cityNumber, name: "", buildings: [] }
            ]
        );

        setCityNumber(cityNumber + 1);
    }

    function removeCity() {
        if (cityNumber > 0) {
            setCityNumber(cityNumber - 1);

            setCities(
                cities.filter(city => city.id !== cityNumber)
            );
        }
    }

    function addGreatWork() {
        if (cityNumber > 0) {
            setWorks(
                [
                    ...works,
                    { id: workNumber, name: "", type: "", civilization: "", era: "" }
                ]
            );

            setWorkNumber(workNumber + 1);
        }
        else {
            alert("Cities must be added before great works.");
        }
    }

    function removeGreatWork() {
        if (workNumber > 0) {
            setWorkNumber(workNumber - 1);

            setWorks(
                works.filter(work => work.id !== workNumber)
            );
        }
    }

    function reset() {
        setCityNumber(0);
        setWorkNumber(0);

        setCities([]);
        setBuildings([]);
        setWorks([]);
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
