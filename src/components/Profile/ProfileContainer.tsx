import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/ReduxStore";
import {profileType, setUserProfile} from "../../Redux/ProfileReducer";

export class ProfileApiComponent extends React.Component<ProfilePropsType> {
    componentDidMount() {//компонента смонтирована, метод жизненного циикла, здесь запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // debugger
                console.log(response.data)
                this.props.setUserProfile(response.data);

            })
    }

    render() {
        // debugger
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};
//{...this.props}
type ProfilePropsType=MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType={
    profile:profileType
}
type MapDispatchToPropsType={
    setUserProfile:(profile:profileType)=>void
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
profile:state.profilePage.profile
    }
}
export const ProfileContainer=connect(mapStateToProps,{setUserProfile})(ProfileApiComponent)