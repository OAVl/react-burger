import React from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { BURGER_API_URL, checkResponse } from "../../utils/burger-api";

function App() {

    const [state, setState] = React.useState({
        isLoading: true,
        hasError: false,
        data: []
    })

    React.useEffect(() => {
        const getData = () => {
            fetch(`${BURGER_API_URL}/ingredients`)
                .then(checkResponse)
                .then(data => setState(prevState =>({...prevState, data: data.data})))
                .catch(e => {
                    setState(prevState => ({ ...prevState, hasError: true }))
                })
                .finally(() => setState(prevState => ({...prevState, isLoading: false})))
        }
        getData()
    }, [])

    const {isLoading, hasError, data} = state

    return (
    <>
      <AppHeader />
      <main className={`${styles.container} p-10`}>
        <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
        <div className={styles.wrapper}>
            {isLoading && 'Загрузка...'}
            {hasError && 'Произошла ошибка'}
            {!!state.data.length && <>
                <BurgerIngredients data={data} />
                <BurgerConstructor data={data} />
                </>
            }
        </div>
      </main>
    </>
  );
}

export default App;
