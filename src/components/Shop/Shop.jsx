import React, {useState} from 'react';
import Product from "./Product/Product";
import classes from './Shop.module.css';
import {connect} from "react-redux";
import Modal from "../NavBar/ModalWindowAddProduct/Modal";
import {addProduct, sortProduct} from "../../redux/creators";

const Shop = ({products, addProduct, sortProduct}) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={classes.shop}>
            <button className={classes.ButtonShop} onClick={() => setModalActive(true)}>Add</button>
            <button className={classes.ButtonShop} onClick={() => sortProduct()}>Sort</button>
            <div className={classes.content}>
                {products.map(product =>
                    <Product key={product.id} product={product}/>)}
            </div>
            <Modal active={modalActive} setModalActive={setModalActive} addProduct={p => addProduct(p)}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
    addProduct: (product) => {
        dispatch(addProduct(product))
    },
    sortProduct: () => {
        dispatch(sortProduct())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
