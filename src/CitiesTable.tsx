import City from "./City";
import { useState } from "react";

interface CitiesTableProps {
    defaultCityNumber: number;
    cityNumber: number;
    
    addCity: () => void;
    removeCity: () => void;
}

export default function CitiesTable({defaultCityNumber, cityNumber, addCity, removeCity}: CitiesTableProps) {
    const cities = [];
    for (let i = 1; i <= cityNumber; i++) {
        cities.push(
            <City cityNumber={i} />
        );
    }

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
                        <th>National Epic</th>
                        <th>Heroic Epic</th>
                        <th>Great Library</th>
                        <th>Oxford University</th>
                        <th>Globe Theatre</th>
                        <th>Palace</th>
                        <th>Parthenon</th>
                        <th>Sistine Chapel</th>
                        <th>Uffizi</th>
                        <th>Hermitage</th>
                        <th>Louvre</th>
                        <th>Broadway</th>
                        <th>Sydney Opera House</th>
                        <th>Royal Library</th>
                        <th>Amphitheater</th>
                        <th>Cathedral</th>
                        <th>Museum</th>
                        <th>Opera House/Ceilidh Hall</th>
                        <th>Broadcast Tower</th>
                        <th>Hotel</th>
                        <th>Airport</th>
                        <th>National Visitor Center</th>
                    </tr>
                </thead>
                <tbody>
                    {cities}
                </tbody>
            </table>
        </div>
    );
}