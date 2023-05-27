import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    ADD_BUN,
    UPDATE_INGREDIENT,
    TOTAL_PRICE
} from '../actions/burger-constructor'

export const initialState = {
    bun: null,
    listIngredientsConstructor: [],
    total: 0
}

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state,
                listIngredientsConstructor: [...state.listIngredientsConstructor, action.payload]
            }
        }
        case ADD_BUN: {
            return {
                ...state,
                bun: action.bun
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                listIngredientsConstructor: [...state.listIngredientsConstructor.filter(item => item.dragId !== action.id)]
            }
        }
        case UPDATE_INGREDIENT: {
            return {
                ...state,
                listIngredientsConstructor: action.optional
            }
        }
        case TOTAL_PRICE: {
            return {
                ...state,
                total: action.payload
            }
        }
        default:
            return state;
    }
}