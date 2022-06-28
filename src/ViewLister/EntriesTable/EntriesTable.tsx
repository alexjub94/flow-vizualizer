import Table from 'react-bootstrap/Table';
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function EntriesTable({
    entryHeaders,
    entries,
    editClbk,
    deleteClbk,
} : {
    entryHeaders: string[];
    entries: string[][];
    editClbk: (entryId: string) => void;
    deleteClbk: (entryId: string) => void;
}) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {entryHeaders.map((header, i) => (
                        <th key={i}>{header}</th>
                    ))}
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, i) => (
                    <tr key={i}>
                        {entry.map((value, j) => (
                            <td key={j}>{value}</td>
                        ))}
                        <td>
                            <EditButton entryId={entry[0]} editClbk={editClbk}/>
                        </td>
                        <td>
                            <DeleteButton entryId={entry[0]} deleteClbk={deleteClbk}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}