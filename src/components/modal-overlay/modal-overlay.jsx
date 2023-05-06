import React from "react";
import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

function ModalOverlay ({children, onClose}) {
    return (
        <div className={styles.container} onClick={onClose} >{children}</div>
    )
}

ModalOverlay.propTypes = {
    children: PropTypes.any,
    onClose: PropTypes.func
};

export default ModalOverlay;