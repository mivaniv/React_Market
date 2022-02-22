import React, {useState} from 'react';
import classes from "./MainProduct.module.css";
import product from "../../../../store/productPng.png";
import {useLocation} from "react-router-dom";
import {getProductBy} from "../../../../actions/CommonApi";
import commentPng from "../../../../store/commentPng.png"
import Comment from "./Coment/Comment";
import AddComment from "../../../NavBar/ModalWindowAddComment/AddComment";

const MainProduct = () => {
    const [modalAddComment, setModalAddComment] = useState(false);

    const id = useQuery().get('id');
    const {name, description, count, comments} = getProductBy(id);

    const [com, setCom] = useState(comments);
    return (
        <div className={classes.MainProduct}>
            <p className={classes.nameProduct}>{name}</p>
            <div><img src={product} alt="bla"/>
            </div>
            <p>Count {count}</p>
            <div>{description}</div>
            <div className={classes.ButtonArea}>
                <button className={classes.Button}>
                    <img alt={""} src={commentPng} onClick={() => setModalAddComment(true)}/></button>
            </div>
            <div>
                {com && com.map(c =>
                    <Comment key={c.id} comment={c} onRemove={() => {
                        setCom(com.filter(comment => comment.id !== c.id))
                    }}/>
                )}
            </div>
            <AddComment active={modalAddComment} setModalAddComment={setModalAddComment}
                        addComment={c => setCom([...com, c])}/>
        </div>
    )
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export default MainProduct;