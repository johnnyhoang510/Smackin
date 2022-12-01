import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import { fetchBusinesses } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import { logout } from "../../actions/session_actions";


const mSTP = (state) => {
    return {
        businesses: Object.values(state.entities.businesses),
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.business
    }
};


const mDTP = (dispatch) => {
    return {
        fetchBusinesses: (query) => dispatch(fetchBusinesses(query)),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        logout: () => dispatch(logout())
    }
};


export default connect(mSTP, mDTP)(BusinessIndex);
