import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
import { fetchBusinesses } from "../../actions/business_actions";
import { logout } from "../../actions/session_actions";
import SearchIndex from "./search_index";


const mSTP = (state) => {
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

export default connect(mSTP, mDTP)(SearchIndex);