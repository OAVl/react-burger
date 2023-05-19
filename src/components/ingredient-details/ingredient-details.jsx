import React  from "react";
import styles from './ingredient-details.module.css'
import { ingredientTypes } from "../../utils/types";

const IngredientDetails = ({element}) => {

    return (
        <section className={styles.container}>
            <h2 className="text text_type_main-large pt-3">Детали ингредиента</h2>
            <div className={styles.wrapper}>
                <img src={element.image_large} alt="картинка продукта" />
                <p className="text text_type_main-medium mt-4 mb-8">{element.name}</p>
                <ul className={styles.list}>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{element.calories}</p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{element.proteins}</p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{element.fat}</p>
                    </li>
                    <li>
                        <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                        <p className="text text_type_main-default text_color_inactive">{element.carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

IngredientDetails.propTypes = {
    element: ingredientTypes.isRequired
};

export default IngredientDetails;