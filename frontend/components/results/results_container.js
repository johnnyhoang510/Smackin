import { connect } from "react-redux";
import Results from "./results"
import { withRouter } from "react-router";
import { fetchBusinesses } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import { logout } from "../../actions/session_actions";


const mSTP = (state, ownProps) => {
    return {
        businesses: Object.values(state.entities.businesses),
        currentUser: state.entities.users[state.session.id]
    }
};


const mDTP = (dispatch) => {
    return {
        fetchBusinesses: (query) => dispatch(fetchBusinesses(query)),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        logout: () => dispatch(logout())
    }
};


export default withRouter(
    connect(
        mSTP,
        mDTP)(
            Results)
);