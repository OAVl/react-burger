import React, { useCallback, useRef } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DELETE_INGREDIENT, UPDATE_INGREDIENT } from "../../services/actions/burger-constructor";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import styles from "./constructor-ingredient.module.css";
import { useDrag, useDrop } from "react-dnd";
import { DELETE_INGREDIENT_COUNT } from "../../services/actions/get-ingredients";

function ConstructorIngredient({element, index}) {

    const dispatch = useDispatch()
    const { listIngredientsConstructor} = useSelector(state => state.burgerConstructor)

    const deleteIngredient = (el) => {
        dispatch({
            type: DELETE_INGREDIENT_COUNT,
            id: el.id,
            dragId: uuid()
        })
        dispatch({
            type: DELETE_INGREDIENT,
            id: el.dragId,
            dragId: uuid()
        })
    }

    const ref = useRef(null);

    const [{ handlerId }, drop] = useDrop({
        accept: 'component',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'component',
        item: () => ({ id: element.id, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    if (element.type !== 'bun') drag(drop(ref));
    const preventDefault = (e) => e.preventDefault();

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = listIngredientsConstructor[dragIndex];
        const newCards = [...listIngredientsConstructor]
        newCards.splice(dragIndex, 1)
        newCards.splice(hoverIndex, 0, dragCard)
        dispatch({
            type: UPDATE_INGREDIENT,
            optional: newCards,
        })
    }, [listIngredientsConstructor, dispatch]);

    return (
        <div key={element._id}
             className={`${styles.wrapper}`}
             ref={ref}
             style={{ opacity }}
             onDrop={preventDefault}
             data-handler-id={handlerId}
        >
            <DragIcon type="primary"/>
            <ConstructorElement
                text={element.name}
                price={element.price}
                thumbnail={element.image}
                handleClose={() => deleteIngredient(element)}
            />
        </div>
    )
}

export default ConstructorIngredient;