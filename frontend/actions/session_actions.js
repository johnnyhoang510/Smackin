import * as APISessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


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
};

export const clearErrors = (errors) => {
    return {
        type: CLEAR_ERRORS,
        errors
    }
};

//thunk action creators

export const login = (formUser) => (dispatch) => {
    return APISessionUtil.login(formUser)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const logout = () => (dispatch) => {
    return APISessionUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
};

export const signup = (formUser) => (dispatch) => {
    return APISessionUtil.signup(formUser)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const fetchCurrentUser = (userId) => (dispatch) => {
    return APISessionUtil.fetchCurrentUser(userId)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
};