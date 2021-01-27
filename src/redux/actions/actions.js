import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = (item) => {
    return { type: ADD_TO_CART, item };
};

export const removeFromCart = id => {
    return { type: REMOVE_FROM_CART, id };
};
