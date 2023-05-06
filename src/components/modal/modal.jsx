import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");



const Modal = ({children, onClose, isOpen, closeTarget}) => {
    useEffect(()=>{
        document.addEventListener("keydown", onClose);
        return () => {
            document.removeEventListener("keydown", onClose);
        }
    }, [])

    if (!isOpen) return null;

        return ReactDOM.createPortal(

                <ModalOverlay onClose={closeTarget} >
                    <div className={styles.modal}>
                        {children}
                        <div className={styles.button} onClick={onClose}>
                            <CloseIcon type="primary" />
                        </div>
                    </div>
                </ModalOverlay>,
             modalRoot
        );
    }

Modal.propTypes = {
    children: PropTypes.any,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    closeTarget: PropTypes.func
};

export default Modal;