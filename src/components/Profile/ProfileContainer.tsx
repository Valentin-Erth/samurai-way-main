import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/ReduxStore";
import {getUserProfileTC, profileType, setUserProfile} from "../../Redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

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

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};



type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type MapStateToPropsType = {
    profile: profileType
 }
type MapDispatchToPropsType = {
    //setUserProfile:(profile:profileType)=>void
    getUserProfileTC: (userId: string) => void
}


let AuthRedirectComponent=WithAuthRedirect(ProfileApiComponent)

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
profile: state.profilePage.profile})
type PathParamsType = {
    userId: string
}
const WithUrkDataContainerComponent = withRouter(AuthRedirectComponent)

export const ProfileContainer = connect(mapStateToProps, {getUserProfileTC})(WithUrkDataContainerComponent)