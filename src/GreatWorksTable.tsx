import { useState } from "react";
import GreatWork from "./GreatWork";

export default function GreatWorksTable() {
    const [workNumber, setWorkNumber] = useState(0);

    function addGreatWork() {
        setWorkNumber(workNumber + 1);
    }

    const greatWorks = [];
    for (let i = 0; i < workNumber; i++) {
        greatWorks.push(
            <GreatWork workNumber={i+1} />
        );
    }

    return(
        <div>
            <h2>Great Works</h2>
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
            <button onClick={addGreatWork}>Add Great Work</button>
        </div>
    );
}