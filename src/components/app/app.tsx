import React from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <>
      <AppHeader />
      <main className={`${styles.container} p-10`}>
        <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
        <div className={styles.wrapper}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    </>
  );
}

export default App;
