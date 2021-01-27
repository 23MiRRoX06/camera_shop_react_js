import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = {
    cameras: []
};

const shopingReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cameras: [...state.cameras, action.item]
            };
        case REMOVE_FROM_CART:
            return {
                cameras: [...state.cameras.filter(camera => camera.id !== action.id)]
            };
        default:
            return state;
    }
}

export default shopingReducer;