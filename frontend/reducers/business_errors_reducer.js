import { RECEIVE_BUSINESS, RECEIVE_BUSINESS_ERRORS, CLEAR_ERRORS } from "../actions/business_actions";


const BusinessErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BUSINESS:
            return [];
        case RECEIVE_BUSINESS_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};


export default BusinessErrorsReducer;