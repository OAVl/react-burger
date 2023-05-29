import {
    CREATED_ORDER_REQUEST,
    CREATED_ORDER_SUCCESS,
    CREATED_ORDER_FAILED
} from '../actions/set-ingredients';

export const initialState = {
    createdOrder: 0,
    createdOrderRequest: false,
    createdOrderFailed: false,
}

export const setIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATED_ORDER_REQUEST: {
            return {...state, createdOrderRequest: true}
        }
        case CREATED_ORDER_SUCCESS: {
            return {...state, createdOrderRequest: false, createdOrderFailed: false, createdOrder: action.items}
        }
        case CREATED_ORDER_FAILED: {
            return {...state, createdOrderRequest: false, createdOrderFailed: true, createdOrder: 0}
        }
        default: {
            return state;
        }
    }
}