import { BURGER_API_URL, checkResponse } from "../../utils/burger-api";

export const CREATED_ORDER_REQUEST = 'CREATED_ORDER_REQUEST';
export const CREATED_ORDER_SUCCESS = 'CREATED_ORDER_SUCCESS';
export const CREATED_ORDER_FAILED = 'CREATED_ORDER_FAILED';

export function setIngredient(items, item) {
    return function(dispatch) {
        dispatch({
            type: CREATED_ORDER_REQUEST
        });
        fetch(`${BURGER_API_URL}/orders`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "ingredients": [...items.map((el) => el.id), item.id]
                })
            }
        )
            .then(checkResponse)
            .then(result => dispatch({
                type: CREATED_ORDER_SUCCESS,
                items: result.order.number
            }))
            .catch(e => {
                dispatch({
                    type: CREATED_ORDER_FAILED
                });
            })
    }
}