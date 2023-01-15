import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import { login, logout, signup } from './actions/session_actions';
// import { fetchBusinesses, fetchBusiness } from "./actions/business_actions";
// import { fetchReviews, fetchReview, createReview, updateReview, deleteReview, fetchReviewsByUser } from "./actions/review_actions";
// import { fetchReviewsByUser } from "./util/review_api_util";
// import { fetchCurrentUser } from "./util/session_api_util";
// import { fetchReviewsByUser } from "./actions/review_actions";
// import { fetchReviews } from "./util/review_api_util";
// import { createVote, deleteVote, fetchVote } from "./actions/vote_actions";

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
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.fetchBusiness = fetchBusiness;
    // window.fetchBusinesses = fetchBusinesses;
    // window.fetchReviews = fetchReviews;
    // window.fetchReview = fetchReview;
    // window.createReview = createReview;
    // window.updateReview = updateReview;
    // window.deleteReview = deleteReview;
    // window.fetchReviewsByUser = fetchReviewsByUser;
    // window.fetchCurrentUser = fetchCurrentUser;
    // window.createVote = createVote;
    // window.deleteVote = deleteVote;
    // window.fetchVote = fetchVote;
    //TESTING END

    ReactDOM.render(<Root store={store} />, root)
});