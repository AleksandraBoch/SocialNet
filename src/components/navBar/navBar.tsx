import React from "react";
import s from './navBar.module.css'
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <>
            <nav className={s.nav}>
                <div className={s.item}>
                    <div className={s.item}>
                        <NavLink to={'/profile'}
                                 className={navData => navData.isActive ? s.active : s.item}>
                            Profile</NavLink></div>
                    <div>
                        <NavLink to={'/dialogs'}
                                 className={navData => navData.isActive ? s.active : s.item}>
                            Messages</NavLink></div>
                    <div>
                        News
                    </div>
                    <div>Music</div>
                    <div>Settings</div>
                </div>
            </nav>
        </>
    )

}