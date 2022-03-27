import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReviews, updateReview, deleteReview, fetchReview } from "../../actions/review_actions";



const mSTP = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id]

    }
};


const mDTP = (dispatch) => {
    return {
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        updateReview: (review, businessId) => dispatch(updateReview(review, businessId)),
        deleteReview: (reviewId, businessId) => dispatch(deleteReview(reviewId, businessId)),
        fetchReview: (businessId, reviewId) => dispatch(fetchReview(businessId, reviewId))
    }
};


export default connect(mSTP, mDTP)(ReviewIndex)

