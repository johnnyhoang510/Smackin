import React from "react";
import { useEffect } from "react";
import { fetchReviews } from "../../actions/review_actions";
import ReviewIndexItem from "./review_index_item";

const ReviewIndex = (props) => {
    const { 
            reviews, 
            updateReview, 
            deleteReview, 
            currentUser, 
            fetchReview, 
            business, 
            rating, 
            numReviews, 
            handleDeleteReview, 
            createVote, 
            deleteVote, 
            fetchVote 
            } = props;

    useEffect(() => {
        fetchReviews(business.id)
    }, []);

    let checkCurrentUser;
    if (currentUser) {
        checkCurrentUser = currentUser
    } else {
        checkCurrentUser = {};
    };

    if (reviews) {
        return (
            <div>
                <h3 className="review-index-rec-reviews">Recommended Reviews</h3>
                <div className="review-index-wrapper">
                    {reviews.map(review => (
                        <ReviewIndexItem 
                            review={review} 
                            key={review.id} 
                            rating={rating} 
                            numReviews={numReviews} 
                            handleDeleteReview={handleDeleteReview} 
                            updateReview={updateReview} 
                            deleteReview={deleteReview} 
                            currentUser={checkCurrentUser} 
                            business={business} 
                            fetchReview={fetchReview}
                            createVote={createVote}
                            deleteVote={deleteVote}
                            fetchVote={fetchVote}
                        />
                    ))}
                </div>
            </div>
        )
    } else {
        return null;
    };
};


export default ReviewIndex;