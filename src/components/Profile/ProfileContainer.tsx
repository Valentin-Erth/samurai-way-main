import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/ReduxStore";
import {
    getUserProfileTC,
    getUserStatusTC,
    profileType,
    setUserProfile,
    updateStatusTC
} from "../../Redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export class ProfileApiComponent extends React.Component<ProfileWithRoutePropsType> {
    componentDidMount() {//компонента смонтирована, метод жизненного циикла, здесь запрос на сервер делаем
        // debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "28517"
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
        );
    }
};



type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type MapStateToPropsType = {
    profile: profileType
    status:string
 }
type MapDispatchToPropsType = {
    //setUserProfile:(profile:profileType)=>void
    getUserProfileTC: (userId: string) => void
    getUserStatusTC:(userId: string) => void
    updateStatusTC:(status: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
profile: state.profilePage.profile,
status:state.profilePage.status
})
type PathParamsType = {
    userId: string
}
//использовали функцию compose взамен конвейера вызовов hoc
export const ProfileContainer=compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC,getUserStatusTC,updateStatusTC}),
    withRouter,
    WithAuthRedirect
)(ProfileApiComponent)
// let AuthRedirectComponent=WithAuthRedirect(ProfileApiComponent)
// const WithUrkDataContainerComponent = withRouter(AuthRedirectComponent)
// export const ProfileContainer = connect(mapStateToProps, {getUserProfileTC})(WithUrkDataContainerComponent)