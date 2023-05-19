import React from "react";
import styles from './order-details.module.css'
import imageDone from '../../images/graphics.svg'
import PropTypes from "prop-types";

const OrderDetails = ({number}) => {
    return (
        <section className={styles.container}>
            <p className="text text_type_digits-large">{number}</p>
            <p className="text text_type_main-medium pt-8 pb-15">идентификатор заказа</p>
            <img src={imageDone} alt='icon'/>
            <p className="text text_type_main-default pt-15 pb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </section>
    )
}

OrderDetails.propTypes = {
    number: PropTypes.number.isRequired
};

export default OrderDetails;