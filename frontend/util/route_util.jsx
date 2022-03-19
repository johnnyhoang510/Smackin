import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router";


const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}


const Auth = ({ path, loggedIn, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to='/' />
        }
    />
);


export const AuthRoute = withRouter(
    connect(
        mapStateToProps, null
    )(Auth)
);