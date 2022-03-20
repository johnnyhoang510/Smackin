import { combineReducers } from "redux";
import { sessionErrorsReducer } from "./session_errors_reducer";
import BusinessErrorsReducer from "./business_errors_reducer";


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    business: BusinessErrorsReducer
});


export default errorsReducer;