import { BURGER_API_URL, checkResponse } from "../../utils/burger-api";

export const LIST_INGREDIENTS_REQUEST = 'GET_ITEMS_REQUEST';
export const LIST_INGREDIENTS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const LIST_INGREDIENTS_FAILED = 'GET_ITEMS_FAILED';
export const LIST_INGREDIENTS_FINALLY = 'LIST_INGREDIENTS_FINALLY';

export const ADD_INGREDIENT_COUNT = 'ADD_INGREDIENT_COUNT';
export const DELETE_INGREDIENT_COUNT = 'DELETE_INGREDIENT_COUNT';
export const ADD_BUN_COUNT = 'ADD_BUN_COUNT';
export const DELETE_BUN_COUNT = 'DELETE_BUN_COUNT';

export function getItems() {
    return function(dispatch) {
        dispatch({
            type: LIST_INGREDIENTS_REQUEST
        });
        fetch(`${BURGER_API_URL}/ingredients`)
            .then(checkResponse)
            .then(data => dispatch({
                type: LIST_INGREDIENTS_SUCCESS,
                items: data.data
            }))
            .catch(e => {
                dispatch({
                    type: LIST_INGREDIENTS_FAILED
                });
            })
            .finally(() => dispatch({
                type: LIST_INGREDIENTS_FINALLY
            }))
    }
}
