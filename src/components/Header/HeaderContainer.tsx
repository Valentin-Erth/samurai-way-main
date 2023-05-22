import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/ReduxStore";
import {GetAuthUserDataTC, setAuthUserData} from "../../Redux/auth-Reducer";
import {authAPI} from "../../api/api";

export class HeaderApiContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.GetAuthUserDataTC()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} />
        )
    }
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    //setAuthUserData: (userID: string, email: string, login: string) => void
    GetAuthUserDataTC:()=>void
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {GetAuthUserDataTC})(HeaderApiContainer)