import React from 'react';
import "./Modal.css"

const Modal = ({active, setModalActive, addProduct}) => {
    return (
        <form className={active ? "modal active" : "modal"} onSubmit={(e) => {
            const p = {
                id: Math.floor(Math.random() * 100),
                name: e.target.name.value,
                brand: e.target.brand.value,
                description: e.target.description.value,
                count: e.target.count.value
            }
            addProduct(p);
            e.preventDefault();
            setModalActive(false);
        }}>
            <div className={active ? "modal__content active" : "modal__content"}>
                <h1>New product</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" required="required" name="name"/>
                </div>
                <div>
                    <label htmlFor="brand">Brand:</label>
                    <input id="brand" required="required" name="brand"/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input id="description" required="required" name="description"/>
                </div>
                <div>
                    <label htmlFor="count">Count:</label>
                    <input id="count" type="number" name="count"/>
                </div>
                <div>
                    <button className="cancel" onClick={e => {
                        setModalActive(false);
                        e.preventDefault();
                    }}>Cancel</button>
                    <button type="submit" className="add">Add</button>
                </div>
            </div>
        </form>
    );
};

export default Modal;