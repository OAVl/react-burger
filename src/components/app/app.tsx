import React, { useEffect, useReducer, useState } from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { BURGER_API_URL, checkResponse } from "../../utils/burger-api";
import {BurgerConstructorContext, TotalPriceContext} from "../../services/appContext";

function App() {

    const [stateData, setStateData] = useState({
        isLoading: true,
        hasError: false,
        data: []
    })

    const totalInitialState = { total: 0 };

    function reducer(state:any, action:any) {
        switch (action.type) {
            case "totalPlus":
                return { total: action.payload };
            case "totalReset":
                return totalInitialState;
            default:
                throw new Error(`Wrong type of action: ${action.type}`);
        }
    }

    const [totalPrice, setTotalPrice] = useReducer(reducer, totalInitialState, undefined);

    useEffect(() => {
        const getData = () => {
            fetch(`${BURGER_API_URL}/ingredients`)
                .then(checkResponse)
                .then(data => setStateData(prevState =>({...prevState, data: data.data})))
                .catch(e => {
                    setStateData(prevState => ({ ...prevState, hasError: true }))
                })
                .finally(() => setStateData(prevState => ({...prevState, isLoading: false})))
        }
        getData()
    }, [])

    const {isLoading, hasError, data} = stateData;

    return (
    <>
      <AppHeader />
      <main className={`${styles.container} p-10`}>
        <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
        <div className={styles.wrapper}>
            {isLoading && 'Загрузка...'}
            {hasError && 'Произошла ошибка'}
            {!!data.length && <>
                    <BurgerIngredients data={data} />
                    <BurgerConstructorContext.Provider value={data}>
                        <TotalPriceContext.Provider value={{totalPrice, setTotalPrice}}>
                            <BurgerConstructor />
                        </TotalPriceContext.Provider>
                    </BurgerConstructorContext.Provider>
                </>
            }
        </div>
      </main>
    </>
  );
}

export default App;
