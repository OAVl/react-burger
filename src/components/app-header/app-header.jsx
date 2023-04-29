import React from 'react';
import styles from './app-header.module.css';
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
        <header className={`${styles.wrapper} p-4`}>
            <nav className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.wrapperLink}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default">Конструктор</p>
                    </li>
                    <li className={styles.wrapperLink}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                    </li>
                </ul>
                <Logo />
                <div className={styles.wrapperLink}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;
