import React from "react";
import { BiUserCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa"

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEllipsis = this.handleEllipsis.bind(this);
        this.hideEllipsis = this.hideEllipsis.bind(this);
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

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id, this.props.review.business_id)
        window.location.reload();
        //need to add a delete modal
    }

    handleEllipsis(e) {
        this.setState({ display: !this.state.display })
    }

    hideEllipsis(e) {
        // e.preventDefault();
        if (e.target.contains(e.relatedTarget)) return null;
        this.setState({ display: false})
    }

    checkCurrentUser() {
        if (!this.props.currentUser || this.props.currentUser.id !== this.props.review.user_id) {
            return "hidden-ellipsis"
        }
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
            editReviewButton = <Link to={`/businesses/${review.business_id}/reviews/${review.id}/edit`} className="hidden-review-link-1">Edit Review</Link>;
            deleteReviewButton = <button onClick={this.handleDelete} className="hidden-review-link-2">Delete Review</button>;
        } else if (!currentUser) {
            editReviewButton = null;
            deleteReviewButton = null;
        }


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
                    
                    <div id={this.checkCurrentUser()} className="review-ellipsis-container">
                        <FaEllipsisH onClick={this.handleEllipsis} className="review-ellipsis" />
                            { this.state.display ? (
                            <div className="review-links-container">
                                    {editReviewButton}
                                    {deleteReviewButton}
                                </div>
                            ) : 
                            null
                        }
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


                </div>
            </div>
        )
    }
};


export default ReviewIndexItem;


// this.state false
// handledropDown setstate

// hidedropDown
// if (e.target(e.relatedTarget)) return null
// this.setState display false