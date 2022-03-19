import React from "react";
// import NavBar from "./navbar/navbar";
import NavBarContainer from "./navbar/navbar_container";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";

const App = () => {
    return (
        <div>
            <nav className="navbar-header">
                <h1>Smackin'</h1>
                <NavBarContainer />
            </nav>

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    )
};


export default App;
