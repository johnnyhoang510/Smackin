import { connect } from "react-redux";
import EditReviewForm from "./edit_review_form";
import { updateReview, clearReviewErrors } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";


const mSTP = (state, ownProps) => {
    return {

    }
};


const mDTP = (dispatch) => {
    return {

    }
};


export default connect(mSTP, mDTP)(EditReviewForm);