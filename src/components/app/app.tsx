import React from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {

    const [state, setState] = React.useState({
        isLoading: true,
        hasError: false,
        data: []
    })

    const apiURL = 'https://norma.nomoreparties.space/api/ingredients'

    React.useEffect(() => {
        const getData = () => {
            setState({ ...state, hasError: false, isLoading: true })
            fetch(apiURL)
                .then(res => res.json())
                .then(data => setState({ ...state, data: data.data, isLoading: false }))
                .catch(e => {
                    setState({ ...state, hasError: true, isLoading: false })
                });
        }
        getData()
    }, [])

    console.log(state.data)

    return (
    <>
      <AppHeader />
      <main className={`${styles.container} p-10`}>
        <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
        <div className={styles.wrapper}>
            {state.isLoading && 'Загрузка...'}
            {state.hasError && 'Произошла ошибка'}
            {!state.isLoading &&
                !state.hasError &&
                state.data.length &&
                <BurgerIngredients data={state.data} />
            }
            {!state.isLoading &&
                !state.hasError &&
                state.data.length &&
                <BurgerConstructor data={state.data} /> }
        </div>
      </main>
    </>
  );
}

export default App;
