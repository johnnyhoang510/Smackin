import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import BusinessShowPage from "./business_show_page";
import { withRouter } from "react-router";


const mSTP = (state, ownProps) => {
    // console.log(state)
    return {
        business: state.entities.businesses[ownProps.match.params.businessId],
        businessId: ownProps.match.params.businessId
    }
};


const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
    }
};


export default connect(mSTP, mDTP)(BusinessShowPage);