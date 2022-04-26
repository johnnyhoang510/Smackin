import { RECEIVE_BUSINESS, RECEIVE_BUSINESS_ERRORS, CLEAR_ERRORS } from "../actions/business_actions";


const BusinessErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BUSINESS:
            return [];
        case RECEIVE_BUSINESS_ERRORS:
            nextState = action.errors;
            return nextState;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};


export default BusinessErrorsReducer;