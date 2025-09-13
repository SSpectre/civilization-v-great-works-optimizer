import GreatWork from "./GreatWork";

type FunctionCallback = () => void;

interface GreatWorksTableProps {
    workNumber: number;
    addGreatWork: FunctionCallback;
    removeGreatWork: FunctionCallback;
}

export default function GreatWorksTable({workNumber, addGreatWork, removeGreatWork}: Readonly<GreatWorksTableProps>) {
    const greatWorkComponents = [];
    for (let i = 0; i < workNumber; i++) {
        greatWorkComponents.push(
            <GreatWork key={i} workNumber={i+1} />
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