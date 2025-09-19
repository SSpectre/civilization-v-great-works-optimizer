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
    const [aestheticsBonus, setAestheticsBonus] = useState(1);

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
        citiesDispatch({type: "buildInstructions", cityID: cityID, building: name});
    }

    const addGreatWork = () => {
        if (cityNumber > 0) {
            setWorkNumber(workNumber + 1);

            greatWorksDispatch({type: "add", workNumber: workNumber});
        }
        else {
            alert("At least one city is needed.");
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

    const updateAestheticsBonus = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setAestheticsBonus(2);
        }
        else {
            setAestheticsBonus(1);
        }
    }

    function optimize() {
        if (cityNumber < 1) {
            alert("At least one city, building, and great work are needed.");
            return;
        }

        //get total slots of all buildings
        let slots = cities.reduce(
            (citySum, city) => {
                return citySum + city.buildings.reduce(
                    (buildingSum, building) => {
                        return buildingSum + building.slots;
                    },
                    0
                )
            },
            0
        );

        if (slots < 1) {
            alert("At least one building with a great work slot is needed.");
            return;
        }

        if (workNumber < 1) {
            alert("At least one great work is needed.");
            return;
        }

        //check if all great works have a type, civilization, and era
        let validGreatWorks = works.reduce(
            (valid, work) => {
                return valid && work.type !== "" && work.civilization !== "" && work.era !== ""
            },
            true
        );

        if (!validGreatWorks) {
            alert("All great works must have a type, civilization, and era.");
        }

        //add the theoretical maximum of each building together to get the overall theoretical maximum
        //building instructions are already sorted, so first index is theoretical maximum
        let theoreticalMax = cities.reduce(
            (citySum, city) => {
                return citySum + city.buildings.reduce(
                    (buildingSum, building) => {
                        return buildingSum + building.instructions[0].tourism
                    },
                    0
                )
            },
            0
        );

        let currentTheoreticalMax = theoreticalMax;
        let currentMax = 0;
        let currentTotal = 0;
        let i = 0;
        let toIgnore = new Set();

        let instructions: Types.Instruction[] = cities.flatMap(city => {
            return city.buildings.flatMap(building => building.instructions);
        })

        instructions.sort((a, b) => b.tourism - a.tourism);

        while (theoreticalMax > currentMax) {
            while (toIgnore.has(i)) {
                i++;
            }

            let theoreticalBuildingMax = instructions[i];
            let j = i;
            break;
        }
        

        console.log(instructions);
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
            <label htmlFor='aesthetic-bonus'>Aesthetics Bonus: </label>
            <input type="checkbox" id="aesthetics-bonus" onChange={updateAestheticsBonus} />
            <button onClick={optimize}>Optimize</button>
            <button onClick={reset}>Reset All</button>
            <CitiesTable cityNumber={cityNumber} addCity={() => addCity()} removeCity={() => removeCity()} renameCity={(id, name) => renameCity(id, name)}
                changeBuilding={(cityID, name) => changeBuilding(cityID, name)} />
            <GreatWorksTable workNumber={workNumber} addGreatWork={() => addGreatWork()} removeGreatWork={() => removeGreatWork()}
                updateGreatWork={(id, property, value) => updateGreatWork(id, property, value)} />
        </div>
    );
}
