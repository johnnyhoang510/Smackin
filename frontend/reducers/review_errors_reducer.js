import { RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from "../actions/review_actions";


const reviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_REVIEW_ERRORS:
            // debugger
            return action.errors;
        case CLEAR_REVIEW_ERRORS:
            return [];
        default:
            return state;
    }
};


export default reviewErrorsReducer;