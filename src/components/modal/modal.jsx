import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");
const ESC_KEYCODE = 27;

const Modal = ({children, onClose, closeTarget}) => {
    useEffect(()=>{
        const handleESCClose = (e) => {if (e.keyCode === ESC_KEYCODE) {
            onClose();
        }}
        document.addEventListener("keydown", handleESCClose);
        return () => {
            document.removeEventListener("keydown", handleESCClose);
        }
    }, [onClose])

        return ReactDOM.createPortal(
             <>
                <ModalOverlay onClose={closeTarget} />
                <div className={styles.modal}>
                    {children}
                    <div className={styles.button} onClick={onClose}>
                        <CloseIcon type="primary" />
                    </div>
                </div>
             </>
                ,
             modalRoot
        );
    }

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    onClose: PropTypes.func.isRequired,
    closeTarget: PropTypes.func.isRequired
};

export default Modal;