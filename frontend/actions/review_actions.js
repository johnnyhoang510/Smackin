import * as APIReviewUtil from "../util/review_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";


// regular action creators
export const receiveAllReviews = (reviews) => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
};

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
};

export const removeReview = (review) => {
    return {
        type: REMOVE_REVIEW,
        review
    }
};

export const receiveReviewErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
};

export const clearReviewErrors = () => {
    return {
        type: CLEAR_REVIEW_ERRORS
    }
};


// thunk action creators

export const fetchReviews = (businessId) => (dispatch) => {
    return APIReviewUtil.fetchReviews(businessId)
        .then(reviews => dispatch(receiveAllReviews(reviews)))
};

export const fetchReview = (businessId, reviewId) => (dispatch) => {
    return APIReviewUtil.fetchReview(businessId, reviewId)
        .then(review => dispatch(receiveReview(review)))
};

export const createReview = (review, businessId) => (dispatch) => {
    return APIReviewUtil.createReview(review, businessId)
        .then(
            review => dispatch(receiveReview(review)),
            err => dispatch(receiveReviewErrors(err))
        )
};

export const updateReview = (review, businessId) => (dispatch) => {
    return APIReviewUtil.updateReview(review, businessId)
        .then(
            review => dispatch(receiveReview(review)),
            err => dispatch(receiveReviewErrors(err))
        )
};

export const deleteReview = (reviewId, businessId) => (dispatch) => {
    return APIReviewUtil.deleteReview(reviewId, businessId)
        .then(
            review => dispatch(removeReview(review)),
            err => dispatch(receiveReviewErrors(err))
        )
};

export const fetchReviewsByUser = (userId, filter) => (dispatch) => {
    return APIReviewUtil.fetchReviewsByUser(userId, filter)
        .then(data => dispatch(receiveAllReviews(data)))
}