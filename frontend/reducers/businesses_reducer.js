import { RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";

const BusinessReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state, {});
    
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            nextState[action.business.id] = action.business;
            return nextState;
        default:
            return state;
    }
};


export default BusinessReducer;