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
                <div className={styles.list}>
                    <a href='#' className={styles.wrapperLink}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default">Конструктор</p>
                    </a>
                    <a href='#' className={styles.wrapperLink}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                    </a>
                </div>
                <a href='/'>
                    <Logo />
                </a>
                <a href='#' className={styles.wrapperLink}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                </a>
            </nav>
        </header>
    );
}

export default AppHeader;
