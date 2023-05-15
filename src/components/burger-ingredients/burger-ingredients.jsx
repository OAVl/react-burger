import React, {useMemo, useState, useContext } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsElement from "../ingredients-element/ingredients-element";
import Modal from '../modal/modal'
import IngredientDetails from "../ingredient-details/ingredient-details";
import { BurgerConstructorContext } from "../../services/appContext";
import { useModal } from "../../hooks/useModal";

function BurgerIngredients() {
    const [current, setCurrent] = useState('one');
    const [selectedElement, setSelectedElement] = useState(null);

    const data = useContext(BurgerConstructorContext);
    const { isModalOpen, openModal, closeModal } = useModal();

    const handlerOpen = (element) => {
        setSelectedElement(element);
        openModal();
    }

    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo( () => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);


    return (
        <section>
            <div className={`${styles.container} pb-10`}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                   <a className={current === 'one' ? styles.active : styles.link} href='#bun'>Булки</a>
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent} >
                    <a className={current === 'two' ? styles.active : styles.link} href='#sauce'>Соусы</a>
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    <a className={current === 'three' ? styles.active : styles.link} href='#main'>Начинки</a>
                </Tab>
            </div>
            <div className={styles.wrapper}>
                <h2 className={`text text_type_main-medium mb-6`} id="bun">Булки</h2>
                <div className={styles.list}>
                    {buns.map((element)=> {
                            return (
                                <div key={element._id}>
                                    <IngredientsElement
                                        image={element.image_large}
                                        price={element.price}
                                        titleProduct={element.name}
                                        openModal={() => handlerOpen(element)}
                                    />

                                </div>

                            )
                    })}
                </div>

                <h2 className={`text text_type_main-medium mt-10 mb-6`} id="sauce">Соусы</h2>
                <div className={styles.list}>
                    {sauces.map((element)=> {
                            return (
                                <div key={element._id}>
                                    <IngredientsElement
                                        image={element.image_large}
                                        price={element.price}
                                        titleProduct={element.name}
                                        openModal={() => handlerOpen(element)}
                                    />
                                </div>
                            )
                    })}
                </div>

                <h2 className={`text text_type_main-medium mt-10 mb-6`} id="main">Начинки</h2>
                <div className={styles.list}>
                    {mains.map((element) => {
                            return (
                                <div key={element._id}>
                                    <IngredientsElement
                                        image={element.image_large}
                                        price={element.price}
                                        titleProduct={element.name}
                                        openModal={() => handlerOpen(element)}
                                    />
                                </div>
                            )
                    })}
                </div>
            </div>

            {isModalOpen &&
                <Modal onClose={closeModal}>
                    <IngredientDetails element={selectedElement} />
                </Modal>
            }

        </section>
    );
}

export default BurgerIngredients;