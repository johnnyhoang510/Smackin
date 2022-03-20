import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from './actions/session_actions';
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchBusinesses, fetchBusiness } from "./actions/business_actions"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const store = configureStore();

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };

    //TESTING START
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBusiness = fetchBusiness;
    window.fetchBusinesses = fetchBusinesses;
    //TESTING END

    ReactDOM.render(<Root store={store} />, root)
});