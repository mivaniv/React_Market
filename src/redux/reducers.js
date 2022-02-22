import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    SORT_PRODUCT
} from "./actions";
import {PRODUCTS} from "../store/ProductStore";

export const products = (state = PRODUCTS, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.product];
        case DELETE_PRODUCT:
            return state.filter(p => p.id !== action.productId);
        case SORT_PRODUCT:
            const countComparator = (p1, p2) => p1.count - p2.count;
            return [...state.sort(countComparator)];
        case EDIT_PRODUCT:
            return state.map(obj => (obj.id === action.productId) ? action.product : obj);
        default:
            const comparator = (p1, p2) => {
                if (p1.name < p2.name) {
                    return 1;
                }
                if (p1.name > p2.name) {
                    return -1;
                }
                return 0;
            };

            return state.sort(comparator);
    }
}
