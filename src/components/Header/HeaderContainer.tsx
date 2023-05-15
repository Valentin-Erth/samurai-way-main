import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/ReduxStore";
import {setAuthUserData} from "../../Redux/auth-Reducer";
import {authAPI} from "../../api/api";

export class HeaderApiContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.getAuth()
            .then(data => {
                // debugger
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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
    setAuthUserData: (userID: string, email: string, login: string) => void
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderApiContainer)