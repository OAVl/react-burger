import {
    LIST_INGREDIENTS_FAILED,
    LIST_INGREDIENTS_FINALLY,
    LIST_INGREDIENTS_REQUEST,
    LIST_INGREDIENTS_SUCCESS,
    ADD_INGREDIENT_COUNT,
    DELETE_INGREDIENT_COUNT,
    ADD_BUN_COUNT,
    DELETE_BUN_COUNT
} from "../actions/get-ingredients";

export const initialState = {
    listIngredients: [],
    listIngredientsRequest: false,
    listIngredientsFailed: false
}

export const getIngredientReducer = (state = initialState, action) => {
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