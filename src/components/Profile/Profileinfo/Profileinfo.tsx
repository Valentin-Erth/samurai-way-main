import React from 'react';
import img from "../../../images/img.jpg"
import s from "./Profileinfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={img} alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}