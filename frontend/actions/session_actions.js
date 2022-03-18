import * as APISessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


//regular action creators
export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

//thunk action creators

export const login = (user) => (dispatch) => {
    return APISessionUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    )
};

export const logout = () => (dispatch) => {
    return APISessionUtil.logout()
        .then((user) => dispatch(logoutCurrentUser()))
};

export const signup = (user) => (dispatch) => {
    return APISessionUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    )
};