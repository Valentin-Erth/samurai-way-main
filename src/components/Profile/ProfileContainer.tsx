import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/ReduxStore";
import {getUserProfileTC, profileType, setUserProfile} from "../../Redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

export class ProfileApiComponent extends React.Component<ProfileWithRoutePropsType> {
    componentDidMount() {//компонента смонтирована, метод жизненного циикла, здесь запрос на сервер делаем
        // debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        if(!this.props.isAtuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type MapStateToPropsType = {
    profile: profileType
    isAtuth:boolean
}
type MapDispatchToPropsType = {
    //setUserProfile:(profile:profileType)=>void
    getUserProfileTC: (userId: string) => void
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAtuth: state.auth.isAuth
    }
}
type PathParamsType = {
    userId: string
}
const WithUrkDataContainerComponent = withRouter(ProfileApiComponent)

export const ProfileContainer = connect(mapStateToProps, {getUserProfileTC})(WithUrkDataContainerComponent)