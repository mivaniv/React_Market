import React, {useState} from 'react';
import classes from "./Comment.module.css";
import deleteIcon from "../../../../../store/deleteIcon.png";
import DeleteConfirmationPopUp from "../../../../NavBar/ModalWindowDelete/DeleteConfirmationPopUp";

const Comment = (props) => {
    const {onRemove, comment: {id, description}} = props
    const [modalConfirm, setModalConfirm] = useState(false);
    return (
        <div className={classes.Comment}>
            <p className={classes.nameUser}>{id}</p>
            <p className={classes.commentUser}>{description}</p>
            <button className={classes.Button} onClick={() => setModalConfirm(true)}><img alt={""} src={deleteIcon} /></button>
            {modalConfirm && <DeleteConfirmationPopUp id={id} onClose={setModalConfirm} onApprove={onRemove}/>}

        </div>

    );
};

export default Comment;