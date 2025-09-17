import { useReducer, useState } from 'react';
import './App.css';
import GreatWorksTable from './GreatWorksTable';
import CitiesTable from './CitiesTable';
import CivilizationSelect from './CivilizationSelect';
import * as Types from './Types';
import citiesReducer from './citiesReducer';
import greatWorksReducer from './greatWorksReducer';

export default function App() {
    const [civilization, setCivilization] = useState("");

    const [cityNumber, setCityNumber] = useState(0);
    const [workNumber, setWorkNumber] = useState(0);

    const initialCities: Types.City[] = [];
    const [cities, citiesDispatch] = useReducer(citiesReducer, initialCities);

    const initialWorks: Types.GreatWork[] = [];
    const [works, greatWorksDispatch] = useReducer(greatWorksReducer, initialWorks);

    const addCity = () => {
        setCityNumber(cityNumber + 1);

        citiesDispatch({type: "add", cityNumber: cityNumber});
    }

    const removeCity = () => {
        if (cityNumber > 0) {
            citiesDispatch({type: "remove", cityNumber: cityNumber});

            setCityNumber(cityNumber - 1);
        }
    }

    const renameCity = (id: number, name: string) => {
        citiesDispatch({type: "rename", id: id, name: name});
    }

    const changeBuilding = (cityID: number, name: string) => {
        citiesDispatch({type: "changeBuilding", cityID: cityID, name: name});
    }

    const addGreatWork = () => {
        if (cityNumber > 0) {
            setWorkNumber(workNumber + 1);

            greatWorksDispatch({type: "add", workNumber: workNumber});
        }
        else {
            alert("Cities must be added before great works.");
        }
    }

    const removeGreatWork = () => {
        if (workNumber > 0) {
            greatWorksDispatch({type: "remove", workNumber: workNumber});
            
            setWorkNumber(workNumber - 1);
        }
    }

    const updateGreatWork = (id: number, property: string, value: string) => {
        greatWorksDispatch({type: "update", id: id, property: property, value: value});
    }

    function reset() {
        setCivilization("");

        setCityNumber(0);
        setWorkNumber(0);

        citiesDispatch({type: "reset"});
        greatWorksDispatch({type: "reset"});
    }

    return (
        <div>
            <label htmlFor='civilization-select'>Your civilization: </label>
            <CivilizationSelect name={"civilization-select"} value={civilization} selectCivilization={(civ) => setCivilization(civ)}/>
            <button onClick={reset}>Reset</button>
            <CitiesTable cityNumber={cityNumber} addCity={() => addCity()} removeCity={() => removeCity()} renameCity={(id, name) => renameCity(id, name)}
                changeBuilding={(cityID, name) => changeBuilding(cityID, name)} />
            <GreatWorksTable workNumber={workNumber} addGreatWork={() => addGreatWork()} removeGreatWork={() => removeGreatWork()}
                updateGreatWork={(id, property, value) => updateGreatWork(id, property, value)} />
        </div>
    );
}
