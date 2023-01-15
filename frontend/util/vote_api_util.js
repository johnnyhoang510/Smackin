export const createVote = (userId, reviewId) => {
    return $.ajax({
        method: "POST",
        url: `api/votes?vote[user_id]=${userId}&vote[review_id]=${reviewId}`
    })
}

export const deleteVote = (voteId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/votes/${voteId}`
    })
}

export const fetchVote = (userId, reviewId) => {
    return $.ajax({
        method: "GET",
        url: `api/votes/find?user_id=${userId}&review_id=${reviewId}`
    })
}