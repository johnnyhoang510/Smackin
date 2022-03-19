import React from "react";
import NavBar from "./navbar/navbar";
import { Route } from "react-router";
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";

const App = () => {
    return (
        <div>
            <nav className="navbar-header">
                <h1>Smackin'</h1>
                <NavBar />
            </nav>

            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </div>
    )
};


export default App;
