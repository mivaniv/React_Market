import React, {useState} from "react";
import classes from './Product.module.css';
import {useHistory} from "react-router-dom";
import {deleteProduct, } from "../../../redux/creators";
import {connect} from "react-redux";
import DeleteConfirmationPopUp from "../../NavBar/ModalWindowDelete/DeleteConfirmationPopUp";
import EditProduct from "../../NavBar/ModalWindowEdit/EditProduct";

const Product = ({product, removeProduct}) => {
    const {id, imageUrl, name, description, count} = product;
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const history = useHistory();
    const choiceHandler = () => history.push(`/product?id=${id}`);
    return (
        <div className={classes.Product}>
            <div>
                <div>
                    <img src={imageUrl} alt={"bla"}/>
                </div>
                <div>
                    <a href="#">{name}</a>
                    <p>{description}</p>
                    <p>Count: {count}</p>
                </div>
            </div>
            <div>
                <button className={classes.remove} onClick={() => setModalConfirm(true)}>
                    <p>Delete</p>
                </button>
                <button className={classes.details} onClick={choiceHandler}>
                    <p>Details</p>
                </button>
                <button  onClick={() => setModalEdit(true)}>
                    <p>Edit</p>
                </button>
            </div>
            {modalConfirm && <DeleteConfirmationPopUp id={id} onClose={setModalConfirm} onApprove={removeProduct}/>}
            {modalEdit && <EditProduct product={product}  onClose={setModalEdit}/>}
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (id) => {
        dispatch(deleteProduct(id));
    }
});


export default connect(null, mapDispatchToProps)(Product);