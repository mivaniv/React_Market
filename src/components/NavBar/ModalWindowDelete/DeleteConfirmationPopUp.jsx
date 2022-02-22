import React from 'react';
import "../ModalWindowAddProduct/Modal.css"

const DeleteConfirmationPopUp = ({id, onClose, onApprove}) => {
    return (
        <form className="modal active">
            <div className="modal__content active">
                <button onClick={() => onClose(false)} className="buttonCancel">Cancel</button>
                <button className="buttonDelete" onClick={() => {
                    onApprove(id);
                    onClose(false)
                }}>Delete
                </button>
            </div>
        </form>
    );
};

export default DeleteConfirmationPopUp;