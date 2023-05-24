import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
// console.log(s);
export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/login" activeClassName={s.active}>Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}