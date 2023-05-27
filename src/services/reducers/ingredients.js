import {
    LIST_INGREDIENTS_REQUEST,
    LIST_INGREDIENTS_SUCCESS,
    LIST_INGREDIENTS_FAILED,
    LIST_INGREDIENTS_FINALLY,
    CURRENT_INGREDIENT,
    CREATED_ORDER_REQUEST,
    CREATED_ORDER_SUCCESS,
    CREATED_ORDER_FAILED,
    ADD_INGREDIENT_COUNT,
    DELETE_INGREDIENT_COUNT,
    ADD_BUN_COUNT,
    DELETE_BUN_COUNT
} from '../actions/ingredients';

export const initialState = {
    listIngredients: [],
    listIngredientsRequest: false,
    listIngredientsFailed: false,

    currentIngredient: {},

    createdOrder: 0,
    createdOrderRequest: false,
    createdOrderFailed: false,
}

export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_INGREDIENTS_REQUEST: {
            return {...state, listIngredientsRequest: true}
        }
        case LIST_INGREDIENTS_SUCCESS: {
            return {...state, listIngredientsRequest: false, listIngredientsFailed: false, listIngredients: action.items}
        }
        case LIST_INGREDIENTS_FAILED: {
            return {...state, listIngredientsRequest: false, listIngredientsFailed: true}
        }
        case LIST_INGREDIENTS_FINALLY: {
            return {...state, listIngredientsRequest: false}
        }
        case CREATED_ORDER_REQUEST: {
            return {...state, createdOrderRequest: true}
        }
        case CREATED_ORDER_SUCCESS: {
            return {...state, createdOrderRequest: false, createdOrderFailed: false, createdOrder: action.items}
        }
        case CREATED_ORDER_FAILED: {
            return {...state, createdOrderRequest: false, createdOrderFailed: true}
        }
        case CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.payload
            }
        }
        case ADD_INGREDIENT_COUNT: {
            return {
                ...state,
                listIngredients: [...state.listIngredients.map(item => item._id === action.id ? {
                    ...item, __v: ++item.__v} : item)]
            }
        }
        case DELETE_INGREDIENT_COUNT: {
            return {
                ...state,
                listIngredients: [...state.listIngredients.map(item => item._id === action.id ? {
                    ...item, __v: --item.__v} : item)]
            }
        }
        case ADD_BUN_COUNT: {
            return {
                ...state,
                listIngredients: [...state.listIngredients.map(item => item._id === action.id ? {
                    ...item, __v: 2} : item)]
            }
        }
        case DELETE_BUN_COUNT: {
            return {
                ...state,
                listIngredients: [...state.listIngredients.map(item => item._id === action.id ? {
                    ...item, __v: 0} : item)]
            }
        }
        default: {
            return state;
        }
    }
}