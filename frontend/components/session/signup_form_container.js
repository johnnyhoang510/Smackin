import { connect } from "react-redux";
import SignupForm from "./signup_form";
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
        demoLogin: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};


export default connect(mSTP, mDTP)(SignupForm);


