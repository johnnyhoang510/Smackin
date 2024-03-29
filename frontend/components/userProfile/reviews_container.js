import { connect } from "react-redux";
import Reviews from "./reviews";
import { fetchReviewsByUser } from "../../actions/review_actions";
import { fetchCurrentUser } from "../../actions/session_actions";

const mSTP = (state) => {
    return {
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.business
    }
};

const mDTP = (dispatch) => {
    return {
        fetchReviewsByUser: (userId, filter) => dispatch(fetchReviewsByUser(userId, filter)),
        fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
    }
};


export default connect(mSTP, mDTP)(Reviews);