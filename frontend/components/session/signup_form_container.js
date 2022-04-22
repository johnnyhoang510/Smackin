import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, clearErrors, login } from "../../actions/session_actions";


const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up'
    }
};


const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        handleDemoLogin: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};


export default connect(mSTP, mDTP)(SessionForm);


