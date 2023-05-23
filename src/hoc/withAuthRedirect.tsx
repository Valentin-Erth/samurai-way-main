import React from 'react';
import {Redirect} from "react-router-dom";
import {RootStateType} from "../Redux/ReduxStore";
import {connect} from "react-redux";

type mapStateToPropsForRedirect={
    isAtuth:boolean
}
const mapStateToPropsForRedirect = (state: RootStateType): mapStateToPropsForRedirect => ({isAtuth: state.auth.isAuth})

export const WithAuthRedirect = (Component) => {
    //сделали классовую компоненту обертку
    class RedirectComponent extends React.Component<any, any>{
        render() {
            if(!this.props.isAtuth) return <Redirect to={"/login"}/>
            return <Component {...props}/>
        }
    }
//сделали доступ к store
    let ConnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
};

