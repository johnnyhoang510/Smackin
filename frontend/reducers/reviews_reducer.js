import { 
        RECEIVE_ALL_REVIEWS,
        RECEIVE_REVIEW,
        REMOVE_REVIEW,   
    } from "../actions/review_actions";


const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState;
        case REMOVE_REVIEW:
            delete nextState[action.review.id];
            return nextState;
        default:
            return state;
    }
};


export default reviewReducer