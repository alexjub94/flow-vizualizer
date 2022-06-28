import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import EntriesTable from "../../EntriesTable/EntriesTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default ({backClbk, name} : {backClbk: () => void, name: string}) => {
    const [entries, setEntries] = useState<string[][]>([])
    const [headers, setHeaders] = useState<string[]>([])

    const editEntry = (entryId: string) => {
        console.log("should edit : " + entryId);
    }

    const deleteEntry = (entryId: string) => {
        console.log("should delete : " + entryId);
    }

    const content = entries?.length > 0 ?
        <EntriesTable entryHeaders={headers} entries={entries} editClbk={editEntry} deleteClbk={deleteEntry}/>
        : <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;

    setTimeout(() => {
        setHeaders(["Id", "Name", "Age"]);
        setEntries([["1", "John", "30"], ["2", "Jane", "25"]]);
    }, 5000);

    return (
        <div className="flow p-3">
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title>{name}</Card.Title>
                    <Button variant={"none"} onClick={backClbk}>
                        <span className={"pr-3"}>
                            <FontAwesomeIcon color={"secondary"} icon={faXmark}/>
                        </span>
                        <span>  Close</span></Button>
                </Card.Header>
                <Card.Body className="p-3">
                    {content}
                </Card.Body>
            </Card>
        </div>
    );
}