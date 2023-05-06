import React, { useState } from 'react';
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
import PropTypes from "prop-types";

function BurgerConstructor({data}) {

    const [openModal, setOpenModal] = useState(false);

    const handlerCloseOverlayModal = (e) => {
        if (e.currentTarget ===  e.target) {
            setOpenModal(false);
        }
    }

    const handlerCloseModal = () => {
        setOpenModal(false);
    }

    const { bun, otherIngredients } = {
        bun: data.find(item => item.type === 'bun'),
        otherIngredients: data.filter(item => item.type !== 'bun')
    };

    return (
        <section >
            <div className={`${styles.container} mb-10`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun.name}
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
                    text={bun.name}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>

            <div className={styles.blockAddToCart}>
                <div className={styles.totalPrice}>
                    <p className="text text_type_digits-medium">610</p>
                    <img src={image} alt='icon' />
                </div>
                <div style={{overflow: 'hidden'}}>
                    <Button htmlType="button" type="primary" size="medium" onClick={() => setOpenModal(true)}>
                        Оформить заказ
                    </Button>
                    <Modal onClose={handlerCloseModal} isOpen={openModal} closeTarget={handlerCloseOverlayModal}>
                        <OrderDetails />
                    </Modal>
                </div>

            </div>
        </section>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.array
};

export default BurgerConstructor;