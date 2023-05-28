import React, { useMemo, useState, useEffect } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsElement from "../ingredients-element/ingredients-element";
import Modal from '../modal/modal'
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useModal } from "../../hooks/useModal";
import { CURRENT_INGREDIENT } from "../../services/actions/current-ingredient";
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from "react-intersection-observer";

function BurgerIngredients() {
    const [current, setCurrent] = useState('');
    const { isModalOpen, openModal, closeModal } = useModal();

    const dispatch = useDispatch();
    const data = useSelector(state => state.getIngredient.listIngredients);

    const handlerOpen = (element) => {
        dispatch({
            type: CURRENT_INGREDIENT,
            payload: element
        });
        openModal();
    }

    const [ ref, inView ] = useInView({
        threshold: 0.5,
    })

    const [ ref2, inView2 ] = useInView({
        threshold: 0.8,
    })

    const [ ref3, inView3 ] = useInView({
        threshold: 0.5,
    })

    useEffect(() => {
        if (inView) {
            setCurrent('one')
        } if (inView2) {
            setCurrent('two')
        } if (inView3) {
            setCurrent('three')
        }
    }, [inView, inView2, inView3])

    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo( () => data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);

    return (
        <section>
            <div className={`${styles.container} pb-10`}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    <a className={`${current === 'one' ? styles.active : styles.link} ${inView ? styles.active : ''}`} href='#bun'>Булки</a>
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent} >
                    <a className={`${current === 'two' ? styles.active : styles.link} ${inView2 ? styles.active : ''}`} href='#sauce'>Соусы</a>
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    <a className={`${current === 'three' ? styles.active : styles.link} ${inView3 ? styles.active : ''}`} href='#main'>Начинки</a>
                </Tab>
            </div>
            <div className={styles.wrapper}>
                <h2 className={`text text_type_main-medium mb-6`} id="bun">Булки</h2>
                <div className={styles.list} ref={ref}>
                    {buns.map((element)=> {
                        return (
                            <div key={element._id} className={styles.item}>
                                {element.__v > 0 && <Counter count={element.__v} size="default" extraClass="m-1"/>}
                                <IngredientsElement
                                    image={element.image_large}
                                    price={element.price}
                                    name={element.name}
                                    id={element._id}
                                    type={element.type}
                                    openModal={() => handlerOpen(element)}
                                />
                            </div>
                        )
                    })}
                </div>

                <h2 className={`text text_type_main-medium mt-10 mb-6`} id="sauce" >Соусы</h2>
                <div className={styles.list} ref={ref2}>
                    {sauces.map((element)=> {
                        return (
                            <div key={element._id} className={styles.item}>
                                {element.__v > 0 && <Counter count={element.__v} size="default" extraClass="m-1"/>}
                                <IngredientsElement
                                    image={element.image_large}
                                    price={element.price}
                                    name={element.name}
                                    id={element._id}
                                    type={element.type}
                                    openModal={() => handlerOpen(element)}
                                />
                            </div>
                        )
                    })}
                </div>

                <h2 className={`text text_type_main-medium mt-10 mb-6`} id="main" >Начинки</h2>
                <div className={styles.list} ref={ref3}>
                    {mains.map((element) => {
                        return (
                            <div key={element._id} className={styles.item}>
                                {element.__v > 0 && <Counter count={element.__v} size="default" extraClass="m-1"/>}
                                <IngredientsElement
                                    image={element.image_large}
                                    price={element.price}
                                    name={element.name}
                                    id={element._id}
                                    type={element.type}
                                    openModal={() => handlerOpen(element)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            {isModalOpen &&
                <Modal onClose={closeModal}>
                    <IngredientDetails />
                </Modal>
            }

        </section>
    );
}

export default BurgerIngredients;