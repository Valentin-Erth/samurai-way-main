import React, {FC} from 'react';
import logo from '../../images/logo.png'
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType={
    isAuth:boolean
    login: string
}
export const Header:FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}