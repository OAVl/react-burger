import React  from "react";
import styles from './ingredient-details.module.css'
import { useSelector } from "react-redux";

const IngredientDetails = () => {

    const currentIngredient = useSelector(state => state.currentIngredients.currentIngredient);

    return (
        <section className={styles.container}>
            <h2 className="text text_type_main-large pt-3">Детали ингредиента</h2>
            <div className={styles.wrapper}>
                <img src={currentIngredient.image_large} alt="картинка продукта" />
                <p className="text text_type_main-medium mt-4 mb-8">{currentIngredient.name}</p>
                <ul className={styles.list}>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.calories}</p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.proteins}</p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.fat}</p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default IngredientDetails;