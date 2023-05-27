import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_INGREDIENT } from "../services/actions/ingredients";

export const useModal = () => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        dispatch({
            type: CURRENT_INGREDIENT,
            currentIngredient: {}
        });
    }, []);

    return {
        isModalOpen,
        openModal,
        closeModal,
    };
};