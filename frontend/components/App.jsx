import React from "react";
// import NavBar from "./navbar/navbar";
import NavBarContainer from "./navbar/navbar_container";
import { Route, Switch } from "react-router";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";
import BusinessIndexContainer from "../components/business/business_index_container";
import BusinessShowPageContainer from "../components/business/business_show_page_container";
import CreateReviewFormContainer from "../components/review/create_review_form_container";


const App = () => {
    return (
        <div>
            <nav className="navbar-header">
                {/* commenting this out throws a dev tool error */}
                {/* <h1>Smackin'</h1> */}
                {/* <NavBarContainer /> */}
            </nav>
            <Switch>
                <Route exact path="/businesses/:businessId/reviews/new" component={CreateReviewFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route exact path="/businesses" component={BusinessIndexContainer} />
                <Route exact path="/businesses/:businessId" component={BusinessShowPageContainer} />
                <Route exact path="/" component={NavBarContainer} />
                {/* {will need splash page here} */}
            </Switch>
        </div>
    )
};


export default App;
