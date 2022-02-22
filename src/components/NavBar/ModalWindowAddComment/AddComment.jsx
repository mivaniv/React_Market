import React, {useState} from 'react';
import "../ModalWindowAddProduct/Modal.css"

const AddComment = ({active, setModalAddComment, addComment}) => {
    return (
        <form className={active ? "modal active" : "modal"} onSubmit={event => {
            event.preventDefault();
            const p = {
                id: Math.floor(Math.random() * 100),
                description: event.target.comment.value,
                date: new Date()
            }
            addComment(p);
            event.target.comment.value = '';
            setModalAddComment(false);
        }}>
            <div className={active ? "modal__content active" : "modal__content"}>
                <h1>New comment</h1>
                <div>
                    <label htmlFor="name">New comment:</label>
                    <textarea id="comment" required="required" name="description"/>
                </div>
                <button className="cancel" onClick={e => {
                    setModalAddComment(false);
                    e.target.comment.value = '';
                    e.preventDefault();
                }}>Cancel
                </button>
                <button type="submit" className="add">Add</button>
            </div>
        </form>


    );

};


export default AddComment;