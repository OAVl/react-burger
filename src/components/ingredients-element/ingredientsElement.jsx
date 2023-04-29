import React from 'react';
import styles from './ingredientsElement.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function IngredientsElement({image, price, titleProduct}) {

    return (
        <div className={`${styles.container} p-4`}>
            <img src={image} alt="product" />
            <div className={styles.price}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.title} text text_type_main-default mt-1`}>{titleProduct}</p>
        </div>
    );
}

export default IngredientsElement;