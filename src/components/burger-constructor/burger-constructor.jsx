import React, { useEffect, useCallback } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import img from '../../images/bun-02.png'
import image from '../../images/Subtract.png'
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { ADD_BUN_COUNT, ADD_INGREDIENT_COUNT, DELETE_BUN_COUNT, setIngredient } from "../../services/actions/ingredients";
import { ADD_BUN, ADD_INGREDIENT, TOTAL_PRICE } from "../../services/actions/burger-constructor"
import { useDrop } from "react-dnd";
import uuid from 'react-uuid';
import ConstructorIngredient from "../constructor-ingredient/constructor-ingredient";

function BurgerConstructor() {

    const { isModalOpen, openModal, closeModal } = useModal();
    const dispatch = useDispatch();
    const { bun, listIngredientsConstructor, total} = useSelector(state => state.burgerConstructor);

    const handleDrop = useCallback((item) => {
        if (item.type === "bun") {
            if (bun) {
                dispatch({
                    type: DELETE_BUN_COUNT,
                    id: bun.id
                })
            }
            addBunCounter(item.id)
            dispatch({
                type: ADD_BUN,
                bun: {
                    ...item,
                    dragId: uuid()
                }
            });
        } else {
            dispatch({
                type: ADD_INGREDIENT,
                payload: {
                    ...item,
                    dragId: uuid()
                }
            });
            addIngredientCounter(item.id)
        }
    }, [dispatch, bun]);

    const addIngredientCounter = (id) => {
        dispatch({
            type: ADD_INGREDIENT_COUNT,
            id,
            dragId: uuid()
        })
    }

    const addBunCounter = (id) => {
        dispatch({
            type: ADD_BUN_COUNT,
            id,
            dragId: uuid()
        })
    }

    const [{ isHover }, dropRef] = useDrop({
        accept: 'ingredient',
        drop(itemId) {
            handleDrop(itemId)
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
    });

    function setData() {
        listIngredientsConstructor.map((item) => {
            dispatch(setIngredient(item))
        })
    }

    const handlerOpenModal = () => {
        openModal();
        setData()
    }

    useEffect(() => {
        let total = 0;
        const bunPrice = () => { return bun && (bun.price * 2)}
        listIngredientsConstructor.map(item => (total += item.price));
        dispatch({
            type: TOTAL_PRICE,
            payload: total + bunPrice()
        })
        }, [listIngredientsConstructor, dispatch, bun]
    );

    return (

        <section >
            <div className={`${isHover ? styles.onHover : ''} ${styles.container} mb-10 `}  ref={dropRef}>
                {!bun ? (
                    <p className={`${styles.listEmptyTop}`}>
                        Перетащите сюда булку
                    </p>)
                    : (
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />)}
                {listIngredientsConstructor !== undefined && listIngredientsConstructor.length !== 0 ?
                    <div className={`${styles.list}`} >
                        {listIngredientsConstructor.map((element, index) => {
                            return (
                                <ConstructorIngredient element={element} index={index} key={index} />
                            )
                        })}
                    </div>
                    :
                    <p className={`${styles.listEmpty}`}>
                        Перетащите сюда ингредиент
                    </p>
                }

                {!bun ? (
                    <p className={`${styles.listEmptyBottom}`}>
                        Перетащите сюда булку
                    </p>)
                : (
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />)}
            </div>

            <div className={styles.blockAddToCart}>
                <div className={styles.totalPrice}>
                    <p className="text text_type_digits-medium">{total}</p>
                    <img src={image} alt='icon' />
                </div>
                <div>
                    <Button htmlType="button" type="primary" size="medium" onClick={handlerOpenModal}>
                        Оформить заказ
                    </Button>

                    {isModalOpen &&
                        <Modal onClose={closeModal}>
                            <OrderDetails />
                        </Modal>
                    }
                </div>

            </div>
        </section>

    );
}

export default BurgerConstructor;