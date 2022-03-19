import { connect } from "react-redux";
import SessionForm from './session_form';
import { login, clearErrors } from "../../actions/session_actions";


const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    }
};


const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        demoLogin: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mSTP, mDTP)(SessionForm);