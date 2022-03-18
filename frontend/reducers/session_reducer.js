import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullSession = Object.freeze({
    id: null
});


export const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            //setting the id of our session state to match current user id
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};
