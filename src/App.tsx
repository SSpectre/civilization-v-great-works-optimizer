import { useState } from 'react'
import './App.css'
import GreatWorksTable from './GreatWorksTable'
import CitiesTable from './CitiesTable'
import CivilizationSelect from './CivilizationSelect'

function App() {
    return (
        <div>
            <label htmlFor='civilization-select'>Your civilization: </label>
            <CivilizationSelect name={"civilization-select"}/>
            <CitiesTable />
            <GreatWorksTable />
        </div>
    );
}

export default App
