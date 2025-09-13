import { useState } from 'react';
import './App.css';
import GreatWorksTable from './GreatWorksTable';
import CitiesTable from './CitiesTable';
import CivilizationSelect from './CivilizationSelect';
import * as Types from './Types';

export default function App() {
    const [cityNumber, setCityNumber] = useState(0);
    const [workNumber, setWorkNumber] = useState(0);

    const [cities, setCities] = useState<Types.City[]>([]);
    const [buildings, setBuildings] = useState<Types.Building[]>([]);

    const [works, setWorks] = useState<Types.GreatWork[]>([]);

    const addCity = () => {
        setCityNumber(cityNumber + 1);

        setCities(
            [
                ...cities,
                { id: cityNumber, name: "", buildings: [] }
            ]
        );
    }

    const removeCity = () => {
        if (cityNumber > 0) {
            setCities(
                cities.filter(city => city.id !== cityNumber)
            );

            setCityNumber(cityNumber - 1);
        }
    }

    const renameCity = (id: number, name:string) => {
        setCities(cities.map(city => {
            if (city.id === id) {
                return {...city, name: name};
            }
            else {
                return city;
            }
        }));
    }

    const addGreatWork = () => {
        if (cityNumber > 0) {
            setWorkNumber(workNumber + 1);

            setWorks(
                [
                    ...works,
                    { id: workNumber, name: "", type: "", civilization: "", era: "" }
                ]
            );
        }
        else {
            alert("Cities must be added before great works.");
        }
    }

    const removeGreatWork = () => {
        if (workNumber > 0) {
            setWorks(
                works.filter(work => work.id !== workNumber)
            );
            
            setWorkNumber(workNumber - 1);

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
            <CitiesTable cityNumber={cityNumber} addCity={() => addCity()} removeCity={() => removeCity()} renameCity={(id, name) => renameCity(id, name)} />
            <GreatWorksTable workNumber={workNumber} addGreatWork={() => addGreatWork()} removeGreatWork={() => removeGreatWork()} />
        </div>
    );
}
