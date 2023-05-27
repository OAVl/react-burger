import React, { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

    const { listIngredients, listIngredientsRequest, listIngredientsFailed } = useSelector(state => state.ingredient);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getItems())
    }, [dispatch])

    return (
    <>
      <AppHeader />
      <main className={`${styles.container} p-10`}>
        <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
        <div className={styles.wrapper}>
            {listIngredientsRequest && 'Загрузка...'}
            {listIngredientsFailed && 'Произошла ошибка'}
            {!!listIngredients.length &&
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </DndProvider>
            }
        </div>
      </main>
    </>
  );
}

export default App;
