import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router";


const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

//renders comp if logged out. dont want a signed in user to go here
const Auth = ({ path, loggedIn, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to='/' />
        }
    />
);

//renders comp if logged in, otherwise redirect
const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
);


export const AuthRoute = withRouter(
    connect(
        mapStateToProps, null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps, null
    )(Protected)
);