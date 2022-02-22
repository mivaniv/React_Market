import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    SORT_PRODUCT
} from './actions'

export const addProduct = (p) => {
    return {
        type: ADD_PRODUCT,
        product: p
    }
}

export const sortProduct = () => {
    return {
        type: SORT_PRODUCT,
    }
}

export const deleteProduct = (productId) => {
    return {
        type: DELETE_PRODUCT,
        productId: productId
    }
}

export const editProduct = (productId, product) => {
    return {
        type: EDIT_PRODUCT,
        productId: productId,
        product: product
    }
}

