import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            component = {(props) => authenticated === false
            ? <Component {...props} />
            : <Redirect to='/chat'/>}
        />
    )
}
