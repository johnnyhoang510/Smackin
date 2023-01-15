import * as APIVoteUtil from "../util/vote_api_util";

export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";

export const receiveVote = (vote) => {
    return {
        type: RECEIVE_VOTE,
        vote
    }
};

export const removeVote = (vote) => {
    return {
        type: REMOVE_VOTE,
        vote
    }
};

// thunk

export const createVote = (userId, reviewId) => (dispatch) => {
    return APIVoteUtil.createVote(userId, reviewId)
        .then(vote => dispatch(receiveVote(vote)))
};

export const deleteVote = (voteId) => (dispatch) => {
    return APIVoteUtil.deleteVote(voteId)
        .then(vote => dispatch(removeVote(vote)))
};

export const fetchVote = (userId, reviewId) => (dispatch) => {
    return APIVoteUtil.fetchVote(userId, reviewId)
        .then(vote => dispatch(receiveVote(vote)))
};