import GreatWork from "./GreatWork";

interface GreatWorksTableProps {
    workNumber: number;
    addGreatWork: () => void;
    removeGreatWork: () => void;
    updateGreatWork: (id: number, property: string, value: string) => void;
}

export default function GreatWorksTable({workNumber, addGreatWork, removeGreatWork, updateGreatWork}: Readonly<GreatWorksTableProps>) {
    const greatWorkComponents = [];
    for (let i = 0; i < workNumber; i++) {
        greatWorkComponents.push(
            <GreatWork key={i} workNumber={i+1} updateGreatWork={(id, property, value) => updateGreatWork(id, property, value)} />
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
                    {greatWorkComponents}
                </tbody>
            </table>
        </div>
    );
}