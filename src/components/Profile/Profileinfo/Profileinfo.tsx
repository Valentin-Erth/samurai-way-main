import React from 'react';
import img from '../../images/img.jpg'
import s from "./Profileinfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftableforchange.com%2Fwhat-to-do-when-thoughts-arise-while-meditating%2F%25D0%25BE%25D0%25B1%25D0%25BE%25D0%25B8-%25D0%25B4%25D0%25BB%25D1%258F-%25D0%25B4%25D0%25B5%25D0%25B2%25D0%25BE%25D1%2587%25D0%25B5%25D0%25BA-%25D0%25BD%25D0%25B0-%25D1%2582%25D0%25B5%25D0%25BB%25D0%25B5%25D1%2584%25D0%25BE%25D0%25BD-12-%25D0%25BB%25D0%25B5%25D1%2582-%25D0%25BA%25D1%2580%25D0%25B0%25D1%2581%25D0%25B8%2F&psig=AOvVaw0iQLCP3gnGPieLTIWU1JJ0&ust=1676269230547000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCRq9Krj_0CFQAAAAAdAAAAABAJ" alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}