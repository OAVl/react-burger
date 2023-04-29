import React from 'react';
import styles from './burger-constructor.module.css';
import { data } from "../../utils/data";
import {
    ConstructorElement,
    DragIcon,
    Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import img from '../../images/bun-02.png'
import image from '../../images/Subtract.png'
import PropTypes from 'prop-types';


function BurgerConstructor() {
    return (
        <section >
            <div className={`${styles.container} mb-10`} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={img}
                />
                <div className={styles.list}>
                {data.map((element) => {
                    return (
                        <div className={styles.wrapper}>
                        <DragIcon type="primary" />
                            <ConstructorElement
                                key={element._id}
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
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={img}
                />
            </div>

            <div className={styles.blockAddToCart}>
                <div className={styles.totalPrice}>
                    <p className="text text_type_digits-medium">610</p>
                    <img src={image} alt='icon' />
                </div>
                <Button htmlType="button" type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
}

ConstructorElement.propTypes = {
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    isLocked: PropTypes.any,
    type: PropTypes.any
};

export default BurgerConstructor;