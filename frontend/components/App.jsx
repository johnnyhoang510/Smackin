import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomepageContainer from "../components/homepage/homepage_container"
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";
import BusinessIndexContainer from "../components/business/business_index_container";
import BusinessShowPageContainer from "../components/business/business_show_page_container";
import CreateReviewFormContainer from "../components/review/create_review_form_container";
import EditReviewFormContainer from "../components/review/edit_review_form_container";
import SearchIndexContainer from "../components/search_bar/search_index_container";


const App = () => {
    return (
        <div>
            <Switch>
                <ProtectedRoute exact path="/businesses/:businessId/reviews/:reviewId/edit" component={EditReviewFormContainer} />
                <ProtectedRoute exact path="/businesses/:businessId/reviews/new" component={CreateReviewFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route path="/businesses/search/:query" component={SearchIndexContainer} replace/>
                <Route exact path="/businesses/:businessId" component={BusinessShowPageContainer} />
                <Route exact path="/businesses" component={BusinessIndexContainer} />
                <Route exact path="/" component={HomepageContainer} />
            </Switch>
        </div>
    )
};


export default App;
