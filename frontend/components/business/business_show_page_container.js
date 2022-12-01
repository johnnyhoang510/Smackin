import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import BusinessShowPage from "./business_show_page";
import { fetchReviews } from "../../actions/review_actions";
import { logout } from "../../actions/session_actions";
import { deleteReview } from "../../actions/review_actions";


const mSTP = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId],
        businessId: ownProps.match.params.businessId,
        currentUser: state.entities.users[state.session.id],
        reviews: Object.values(state.entities.reviews)
    }
};


const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        deleteReview: (reviewId, businessId) => dispatch(deleteReview(reviewId, businessId)),
        logout: () => dispatch(logout())
    }
};


export default connect(mSTP, mDTP)(BusinessShowPage);