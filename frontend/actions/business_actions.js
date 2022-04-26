import * as BusinessAPIUtil from "../util/business_api_util";

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


// regular action creators
export const receiveAllBusinesses = (businesses) => {
    return {
        type: RECEIVE_ALL_BUSINESSES,
        businesses
    }
};

export const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
};

export const receiveBusinessErrors = (errors) => {
    return {
        type: RECEIVE_BUSINESS_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


// thunk action creators
export const fetchBusinesses = (query) => (dispatch) => {
    return BusinessAPIUtil.fetchBusinesses(query)
        .then(businesses => dispatch(receiveAllBusinesses(businesses)))
};

export const fetchBusiness = (businessId) => (dispatch) => {
    return BusinessAPIUtil.fetchBusiness(businessId)
        .then(business => dispatch(receiveBusiness(business)))
};
