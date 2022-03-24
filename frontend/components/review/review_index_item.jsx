import React from "react";
import { BiUserCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleUpdate(e) {
        e.preventDefault();
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id, this.props.review.business_id)
    }

    render() {
        // console.log(this.props);
        
        const { review, currentUser, updateReview, deleteReview } = this.props;

        if (!review) return null;
        if (!currentUser) return null;

        let editReviewButton;
        let deleteReviewButton;
        if (currentUser.id === review.user_id) {
            //link not working properly. still can key in url other reviews that dont belong to user
            editReviewButton = <Link to={`/businesses/${review.business_id}/reviews/${review.id}/edit`}>Edit Review</Link>;
            deleteReviewButton = <button onClick={this.handleDelete}>Delete Review</button>;
        } else {
            editReviewButton = null;
            deleteReviewButton = null;
        }

        return(
            <div>
                <h1>Review Index item!</h1>
                <p className="review-item-user-icon"><BiUserCircle /></p>
                <p className="review-item-users-name">{review.user_first_name} {review.user_last_name}</p>
                <p>Rating: {review.rating}</p>
                <p>{review.created_at}</p>
                <p>{review.body}</p>
                {editReviewButton}
                {deleteReviewButton}
            </div>
        )
    }
};


export default ReviewIndexItem;