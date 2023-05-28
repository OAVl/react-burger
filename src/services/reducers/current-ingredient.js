import { CURRENT_INGREDIENT } from "../actions/current-ingredient";

export const initialState = {
    currentIngredient: {}
}

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.payload
            }
        }
        default: {
            return state;
        }
    }
}