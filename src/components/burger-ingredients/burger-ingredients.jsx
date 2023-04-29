import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../utils/data'
import IngredientsElement from "../ingredients-element/ingredientsElement";
import PropTypes from 'prop-types';

function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')

    const colorTab = (value) => (current === value)
        ? { className: styles.active }
        : { className: styles.link }

    return (
        <section>
            <div style={{ display: 'flex' }} className={`pb-10`}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                   <a {...colorTab('one')} href='#bun'>Булки</a>
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent} >
                    <a {...colorTab('two')} href='#sauce'>Соусы</a>
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    <a {...colorTab('three')} href='#main'>Начинки</a>
                </Tab>
            </div>
            <div className={styles.wrapper}>
                <h2 className={`text text_type_main-medium mb-6`} id="bun">Булки</h2>
                <div className={styles.list}>
                    {data.map((element)=> {
                        if (element.type === "bun") {
                            return (
                                <IngredientsElement
                                    key={element._id}
                                    image={element.image_large}
                                    price={element.price}
                                    titleProduct={element.name}
                                />
                            )
                        }

                    })}
                </div>

                <h2 className={`text text_type_main-medium mt-10 mb-6`} id="sauce">Соусы</h2>
                <div className={styles.list}>
                    {data.map((element)=> {
                        if (element.type === "sauce") {
                            return (
                                <IngredientsElement
                                    key={element._id}
                                    image={element.image_large}
                                    price={element.price}
                                    titleProduct={element.name}
                                />
                            )
                        }

                    })}
                </div>

                <h2 className={`text text_type_main-medium mt-10 mb-6`} id="main">Начинки</h2>
                <div className={styles.list}>
                    {data.map((element) => {
                        if (element.type === "main") {
                            return (
                                <IngredientsElement
                                    key={element._id}
                                    image={element.image_large}
                                    price={element.price}
                                    titleProduct={element.name}
                                />
                            )
                        }
                    })}
                </div>
            </div>

        </section>
    );
}

IngredientsElement.propTypes = {
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    titleProduct: PropTypes.string.isRequired
};

export default BurgerIngredients;