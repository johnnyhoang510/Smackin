import { connect } from "react-redux";
import { createReview, clearReviewErrors } from "../../actions/review_actions";
import CreateReviewForm from "./create_review_form";
import { fetchBusiness } from "../../actions/business_actions";
import { logout } from "../../actions/session_actions";


const mSTP = (state, ownProps) => {
    // console.log(ownProps)
    return {
        currentUser: state.entities.users[state.session.id],
        business: state.entities.businesses[ownProps.match.params.businessId],
        errors: state.errors.review,
        user_id: state.session.id
    }
};



const mDTP = (dispatch) => {
    return {
        createReview: (review, businessId) => dispatch(createReview(review, businessId)),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        clearReviewErrors: () => dispatch(clearReviewErrors()),
        logout: () => dispatch(logout())
    }
};


export default connect(mSTP, mDTP)(CreateReviewForm)

