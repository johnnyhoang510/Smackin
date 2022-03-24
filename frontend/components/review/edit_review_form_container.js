import { connect } from "react-redux";
import EditReviewForm from "./edit_review_form";
import { fetchReview, updateReview, clearReviewErrors } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";


const mSTP = (state, ownProps) => {
    // console.log(ownProps);
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId],
        business: state.entities.businesses[ownProps.match.params.businessId],
        currentUser: state.entities.users[state.session.id],
        user_id: state.session.id,
        businessId: ownProps.match.params.businessId,
        reviewId: ownProps.match.params.reviewId,
        errors: state.errors.review
    }
};


const mDTP = (dispatch) => {
    return {
        fetchReview: (businessId, reviewId) => dispatch(fetchReview(businessId, reviewId)),
        updateReview: (review, businessId) => dispatch(updateReview(review, businessId)),
        clearReviewErrors: () => dispatch(clearReviewErrors()),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
    }
};


export default connect(mSTP, mDTP)(EditReviewForm);