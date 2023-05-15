import React from "react";
import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

function ModalOverlay ({onClose}) {

    const handlerCloseOverlayModal = (e) => {
        if (e.currentTarget ===  e.target) {
            onClose(false);
        }
    }

    return (
        <div className={styles.container} onClick={handlerCloseOverlayModal} ></div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default ModalOverlay;