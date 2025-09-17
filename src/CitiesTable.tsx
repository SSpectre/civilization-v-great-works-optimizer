import { useState, JSX } from "react";
import City from "./City";
import { buildingList } from "./optionLists";

interface CitiesTableProps {
    cityNumber: number;
    addCity: () => void;
    removeCity: () => void;
    renameCity: (id: number, name:string) => void;
    changeBuilding: (cityID: number, name: string) => void;
}

export default function CitiesTable({cityNumber, addCity, removeCity, renameCity, changeBuilding}: Readonly<CitiesTableProps>) {
    const cityComponents = [];
    for (let i = 0; i < cityNumber; i++) {
        cityComponents.push(
            <City cityNumber={i+1} renameCity={(id, name) => renameCity(id, name)} changeBuilding={(cityID, name) => changeBuilding(cityID, name)} />
        );
    }

    const buildingComponents = buildingList.map(building => {
        const regex = /[ \/]/;
        let formatted = building.name.replaceAll("-", " ");
        formatted = formatted[0].toUpperCase() + formatted.substring(1);
        
        //capitalize the first letter after each space or slash
        let startIndex = 0;
        let index;
        do {
            index = formatted.substring(startIndex).search(regex) + 1;
            let adjustedIndex = index + startIndex;

            formatted = formatted.substring(0, adjustedIndex) + formatted[adjustedIndex].toUpperCase() + formatted.substring(adjustedIndex + 1);
            startIndex = adjustedIndex;
        }
        while (index > 0);

        return <th key={building.name}>{formatted}</th>
    });

    return (
        <div>
            <div>
                <h2 className="table-header">Cities and Buildings</h2>
                <button onClick={addCity}>Add City</button>
                <button onClick={removeCity}>Remove City</button>
            </div>
            <table id="city-building-table">
                <thead>
                <tr>
                    <th>Name</th>
                    {buildingComponents}
                </tr>
                </thead>
                <tbody>
                    {cityComponents}
                </tbody>
            </table>
        </div>
    );
}