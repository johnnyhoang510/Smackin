import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import BusinessReducer from "./businesses_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: BusinessReducer
});


export default entitiesReducer;