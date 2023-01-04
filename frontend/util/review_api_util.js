export const fetchReviewsByUser = (userId, filter) => {
    let sortParams = "";
    if (filter !== "") {
        sortParams = `?sort=${filter}`
    }

    return $.ajax({
        method: "GET",
        url: `api/users/${userId}${sortParams}`
    })
}

export const fetchReviews = (businessId) => {
    return $.ajax({
        method: "GET",
        url: `/api/businesses/${businessId}/reviews`
    })
};

export const fetchReview = (businessId, reviewId) => {
    return $.ajax({
        method: "GET",
        url: `/api/businesses/${businessId}/reviews/${reviewId}`
    })
};

export const createReview = (review, businessId) => {
    return $.ajax({
        method: "POST",
        url: `api/businesses/${businessId}/reviews`,
        data: { review }
    })
};

export const updateReview = (review, businessId) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/businesses/${businessId}/reviews/${review.id}`,
        data: { review }
    })
};

export const deleteReview = (reviewId, businessId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/businesses/${businessId}/reviews/${reviewId}`
    })
}