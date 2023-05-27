import { combineReducers } from "redux";
import { ingredientReducer } from "./ingredients";
import { burgerConstructorReducer } from "./burger-constructor";

export const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    burgerConstructor: burgerConstructorReducer
});