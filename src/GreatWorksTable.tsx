import { useState } from "react";
import GreatWork from "./GreatWork";

interface GreatWorksTableProps {
    defaultWorkNumber: number;
    workNumber: number;

    addGreatWork: () => void;
    removeGreatWork: () => void;
    selectGreatWorkType: (value: string, oldValue: string, tableRow: number) => void;
}

export default function GreatWorksTable({defaultWorkNumber, workNumber, addGreatWork, removeGreatWork, selectGreatWorkType}: GreatWorksTableProps) {


    const greatWorks = [];
    for (let i = defaultWorkNumber; i < workNumber; i++) {
        greatWorks.push(
            <GreatWork workNumber={i+1} selectGreatWorkType={selectGreatWorkType} />
        );
    }

    return(
        <div>
            <h2 className="table-header">Great Works</h2>
            <button onClick={addGreatWork}>Add Great Work</button>
            <button onClick={removeGreatWork}>Remove Great Work</button>
            <table id="great-works-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Civilization</th>
                        <th>Era</th>
                    </tr>
                </thead>
                <tbody>
                    {greatWorks}
                </tbody>
            </table>
        </div>
    );
}