import React, { useState, useContext, useEffect } from 'react';
import styles from './burger-constructor.module.css';
import {
    ConstructorElement,
    DragIcon,
    Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import img from '../../images/bun-02.png'
import image from '../../images/Subtract.png'
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { BurgerConstructorContext, TotalPriceContext } from "../../services/appContext";
import {BURGER_API_URL, checkResponse} from "../../utils/burger-api";
import { useModal } from "../../hooks/useModal";

function BurgerConstructor() {

    const [numberOrder, setNumberOrder] = useState(0)

    const data = useContext(BurgerConstructorContext);
    const { totalPrice, setTotalPrice } = useContext( TotalPriceContext );
    const { isModalOpen, openModal, closeModal } = useModal();

    function setData() {
        data.map((item) => {
            return fetch(`${BURGER_API_URL}/orders`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        "ingredients": item._id
                    })
                }
            )
                .then(checkResponse)
                .then(result => setNumberOrder(result.order.number))
                .catch(e => {console.log(e)})
        })
    }

    const handlerOpenModal = () => {
        openModal();
        setData()
    }

    const { bun, otherIngredients } = {
        bun: data.find(item => item.type === 'bun'),
        otherIngredients: data.filter(item => item.type !== 'bun')
    };

    useEffect(() => {
            let total = 0;
            data.map(item => (total += item.price));
            setTotalPrice({type: 'totalPlus', payload: total});
        }, [data, setTotalPrice]
    );

    return (
        <section >
            <div className={`${styles.container} mb-10`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
                <div className={styles.list}>
                {otherIngredients.map((element) => {
                    return (
                        <div key={element._id} className={styles.wrapper} >
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={element.name}
                                price={element.price}
                                thumbnail={element.image}
                            />
                        </div>
                    )})}
                </div>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>

            <div className={styles.blockAddToCart}>
                <div className={styles.totalPrice}>
                    <p className="text text_type_digits-medium">{totalPrice.total}</p>
                    <img src={image} alt='icon' />
                </div>
                <div style={{overflow: 'hidden'}}>
                    <Button htmlType="button" type="primary" size="medium" onClick={handlerOpenModal}>
                        Оформить заказ
                    </Button>

                    {isModalOpen &&
                        <Modal onClose={closeModal}>
                            <OrderDetails number={numberOrder} />
                        </Modal>
                    }
                </div>

            </div>
        </section>
    );
}

export default BurgerConstructor;