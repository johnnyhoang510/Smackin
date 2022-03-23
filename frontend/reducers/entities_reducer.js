import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import BusinessReducer from "./businesses_reducer";
import reviewReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: BusinessReducer,
    reviews: reviewReducer
});


export default entitiesReducer;