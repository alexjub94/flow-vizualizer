import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton({
    entryId,
    deleteClbk,
}: {
    entryId: string;
    deleteClbk: (entryId: string) => void;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                deleteClbk(entryId);
            }}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            className={hovered ? "text-secondary" : "text-danger"}
        >
            <FontAwesomeIcon icon={faTrash} />
            <span>  Delete</span>
        </div>
    );
}