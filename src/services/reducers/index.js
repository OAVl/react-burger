import { combineReducers } from "redux";
import { setIngredientReducer } from "./set-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { getIngredientReducer } from "./get-ingredients";
import { currentIngredientReducer } from "./current-ingredient";

export const rootReducer = combineReducers({
    ingredient: setIngredientReducer,
    getIngredient: getIngredientReducer,
    burgerConstructor: burgerConstructorReducer,
    currentIngredients: currentIngredientReducer
});