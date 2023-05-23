import React from 'react';
import img from "../../../images/img.jpg"
import s from "./Profileinfo.module.css";
import {profileType} from "../../../Redux/ProfileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: profileType
    updateStatus:(status:string)=>void
    status:string
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
        // debugger
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src={img} alt="img"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div><img src={props.profile.photos.large}/></div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/*<span>aboutMe: {props.profile.aboutMe}</span><br/>*/}
                {/*<span>fullName: {props.profile.fullName}</span><br/>*/}
                {/*<span>Job: {props.profile.lookingForAJobDescription}</span><br/>*/}
                </div>
        </div>
    )
}