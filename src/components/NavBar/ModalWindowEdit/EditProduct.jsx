import React, {useState} from 'react';
import "../ModalWindowAddProduct/Modal.css"
import {connect} from "react-redux";
import {editProduct} from "../../../redux/creators";


const EditProduct = ({product, onClose, editing}) => {
    return (

        <form className="modal active" onSubmit={event => {
            event.preventDefault();
            const p = {
                imageUrl: product.imageUrl,
                id: event.target.brand.value,
                name: event.target.name.value,
                count: event.target.count.value,
                description: event.target.description.value,
            };
            editing(Number.parseInt(p.id), p)
            onClose(false);
        }}>
            <div className="modal__content active">
                <h1>Edit product</h1>

                <div>
                    <label htmlFor="brand">Id:</label>
                    <input id="brand" required="required" readOnly={true} value={product.id} name="brand"/>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" required="required" defaultValue={product.name} name="name"/>
                </div>
                <div>
                    <label htmlFor="count">Count:</label>
                    <input id="count" type="number" defaultValue={product.count} name="count"/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" className="description" required="required"
                              defaultValue={product.description} name="description"/>
                </div>
                <div>
                    <button className="cancel" onClick={e => {
                        e.preventDefault();
                        onClose(false);
                    }}>Cancel
                    </button>
                    <button className="add" type="submit">Edit</button>
                </div>
            </div>
        </form>
    );
};

const mapStateToProps = (state, ownProps) => ({
    product: ownProps.product,
});

const mapDispatchToProps = (dispatch) => ({
        editing: (id, product) => {
            dispatch(editProduct(id, product))
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);