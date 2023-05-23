import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {RootStateType} from "../Redux/ReduxStore";
import {connect} from "react-redux";

type mapStateToPropsForRedirect = {
    isAtuth: boolean
}
const mapStateToPropsForRedirect = (state: RootStateType): mapStateToPropsForRedirect => ({isAtuth: state.auth.isAuth})

export function WithAuthRedirect <T>(Component: ComponentType<T>){
    //сделали компоненту обертку
    function RedirectComponent(props: mapStateToPropsForRedirect) {
        let {isAtuth,...restProps}=props
        if (!isAtuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }

//сделали доступ к store для isAtuth
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
};

