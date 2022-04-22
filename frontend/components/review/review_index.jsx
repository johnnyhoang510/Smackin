import React from "react";
import ReviewIndexItem from "./review_index_item";


class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // business being passed down from show page
        this.props.fetchReviews(this.props.business.id)
    }

    render() {

        //if no current user, this will allow reviews to still render
        let checkCurrentUser;
        if (this.props.currentUser) {
            checkCurrentUser = this.props.currentUser
        } else {
            checkCurrentUser = {};
        }

        // console.log(checkCurrentUser);

        const { reviews, updateReview, deleteReview, currentUser, fetchReview, business } = this.props;

        if (!reviews) return null;
        // console.log(reviews)

        return (
            <div>
                <h3 className="review-index-rec-reviews">Recommended Reviews</h3>
                <div className="review-index-wrapper">
                    {reviews.map(review => (
                        <ReviewIndexItem review={review} key={review.id} updateReview={updateReview} deleteReview={deleteReview} currentUser={checkCurrentUser} business={business} fetchReview={fetchReview} />
                    ))}
                </div>
            </div>
        )
    }
};


export default ReviewIndex;