import React from 'react';
import styles from './ingredients-element.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

function IngredientsElement({image, price, name, openModal, id, type}) {

    const [{ opacity }, refDrag] = useDrag({
        type: 'ingredient',
        item: { id, price, name, image, type },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    })
    return (
        <div className={`${styles.container} p-4`} onClick={openModal} ref={refDrag} style={{opacity}}>
            <img src={image} alt="product" />
            <div className={styles.price}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.title} text text_type_main-default mt-1`}>{name}</p>
        </div>
    );
}

IngredientsElement.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    openModal: PropTypes.any,
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired
};

export default IngredientsElement;