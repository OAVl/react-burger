import React from 'react';
import styles from './ingredients-element.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

function IngredientsElement({image, price, titleProduct, openModal}) {

    return (
        <div className={`${styles.container} p-4`} onClick={openModal}>
            <img src={image} alt="product" />
            <div className={styles.price}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.title} text text_type_main-default mt-1`}>{titleProduct}</p>
        </div>
    );
}

IngredientsElement.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    titleProduct: PropTypes.string.isRequired,
    openModal: PropTypes.any
};

export default IngredientsElement;