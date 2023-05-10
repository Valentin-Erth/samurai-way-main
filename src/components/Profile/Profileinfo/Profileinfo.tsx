import React from 'react';
import img from "../../../images/img.jpg"
import s from "./Profileinfo.module.css";
import {profileType} from "../../../Redux/ProfileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: profileType
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
        debugger
    }
    return (
        <div>
            <div>
                <img src={img} alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                <span> ava </span>
                <div><img src={props.profile.photos.large}/></div>
                <span>aboutMe: {props.profile.aboutMe}</span><br/>
                <span>fullName: {props.profile.fullName}</span><br/>
                <span>Job: {props.profile.lookingForAJobDescription}</span><br/>

                {/*ava+description*/}
            </div>
        </div>
    )
}