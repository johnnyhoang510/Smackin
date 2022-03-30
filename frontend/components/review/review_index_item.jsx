import React from "react";
import { BiUserCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchReview(this.props.business.id, this.props.review.id);
    //     console.log("mount")
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.businessId !== this.props.businessId) {
    //         this.componentDidMount();
    //     }
    //     console.log("update")
    // }

    handleUpdate(e) {
        e.preventDefault();
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id, this.props.review.business_id)
        window.location.reload();
        //need to add a delete modal
    }

    reviewCreateDate() {
        let date = this.props.review.created_at;
        let newDate = date.split("-");
        let month = newDate[1];
        let day = newDate[2].slice(0, 2);
        let year = newDate[0];
        const reviewDate = `${month}/${day}/${year}`
        return reviewDate;
    }

    render() {
        // console.log(this.props);
        if (!this.props.review) return null;
        if (!this.props.currentUser) return null;
        
        const { review, currentUser, updateReview, deleteReview, business } = this.props;


        let editReviewButton;
        let deleteReviewButton;
        if (currentUser.id === review.user_id) {
            //link not working properly. still can key in url other reviews that dont belong to user
            editReviewButton = <Link to={`/businesses/${review.business_id}/reviews/${review.id}/edit`}>Edit Review</Link>;
            deleteReviewButton = <button onClick={this.handleDelete}>Delete Review</button>;
        } else if (!currentUser) {
            editReviewButton = null;
            deleteReviewButton = null;
        }
        // console.log("render")
        // console.log(review)

        // ****-----------------------------------------------------****
        // not rendering properly. only shows reviews when signed in
        // I THINK I FIXED IT??? MAYBE
        return(


            <div>
                <div className="review-item-container">
                    <div className="review-item-profile-container">
                        <p className="review-item-user-icon"><BiUserCircle /></p>

                        <div className="review-item-name-container">
                            <p className="review-item-users-name">{review.user_first_name} {`${review.user_last_name}`[0]}.</p>
                            <p className="review-item-users-location">{business.city}, {business.state}</p>
                        </div>
                    </div>

                    <div className="review-item-rating-container">
                        <p className="review-item-rating">(Star-Rating): {review.rating}</p>
                        {/* giving an error after editing a review */}
                        {/* <p className="review-item-create-date">{this.reviewCreateDate()}</p> */}
                        {/* <p className="review-item-create-date">{review.created_at}</p> */}
                    </div>

                    <div className="review-item-body-container">
                        <p className="review-item-body">{review.body}</p>
                    </div>

                    <div className="review-item-buttons-container">
                        {editReviewButton}
                        {deleteReviewButton}
                    </div>
                </div>
            </div>
        )
    }
};


export default ReviewIndexItem;