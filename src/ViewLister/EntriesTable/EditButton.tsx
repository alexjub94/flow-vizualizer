import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function EditButton({
    entryId,
    editClbk,
}: {
    entryId: string;
    editClbk: (entryId: string) => void;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                editClbk(entryId);
            }}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            className={hovered ? "text-secondary" : "text-primary"}
        >
            <FontAwesomeIcon icon={faPen} />
            <span>  Edit</span>
        </div>
    );
}