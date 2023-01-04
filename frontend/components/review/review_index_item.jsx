import React from "react";
import { BiUserCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa"
import { useState, useRef } from "react";
import useOutsideClick from "../../util/use_outside_click";

const ReviewIndexItem = (props) => {
    const { business, currentUser, review, handleDeleteReview } = props;
    const [show, setShow] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (show) setShow(false);
    })

    const checkCurrentUser = () => {
        if (!currentUser || currentUser.id !== review.user_id) {
            return "hidden-ellipsis"
        }
    }

    const checkStarRating = () => {
        switch (review.rating) {
            case 5:
                return "review-item-rating-5"
            case 4:
                return "review-item-rating-4"
            case 3:
                return "review-item-rating-3"
            case 2:
                return "review-item-rating-2"
            case 1:
                return "review-item-rating-1"
            default:
                break;
        }
    }
    
    const convertDate = (date) => {
        if (!date) return null;
        const dateSplit = date.split("T")[0];
        const [year, month, day] = dateSplit.split("-")

        return `${month}/${day}/${year}`
    }
    
    let editReviewButton;
    let deleteReviewButton;
    if (currentUser.id === review.user_id) {
        editReviewButton = <Link to={`/businesses/${review.business_id}/reviews/${review.id}/edit`} className="hidden-review-link-1">Edit Review</Link>;
        deleteReviewButton = <button onClick={() => handleDeleteReview(review.id, business.id)} className="hidden-review-link-2">Delete Review</button>;
    } else if (!currentUser) {
        editReviewButton = null;
        deleteReviewButton = null;
    }

    if (review && business) {
        return(
            <div>
                <div className="review-item-container">
                    <div className="review-item-profile-container">
                        <p className="review-item-user-icon"><BiUserCircle/></p>

                        <div className="review-item-name-container">
                            <p className="review-item-users-name">{review.user_first_name} {`${review.user_last_name}`[0]}.</p>
                            <p className="review-item-users-location">{business.city}, {business.state}</p>
                        </div>
                    </div>
                    
                    <div id={checkCurrentUser()} className="review-ellipsis-container">
                        <FaEllipsisH onClick={() => setShow(!show)} className="review-ellipsis"/>
                            { show && (
                                <div ref={ref} className="review-links-container">
                                    {editReviewButton}
                                    {deleteReviewButton}
                                </div> )
                            }
                    </div>

                    <div className="review-item-rating-container">
                        <p id="review-index-item-star-rating" className={checkStarRating()}></p>
                        <p className="review-item-create-date">{convertDate(review.created_at)}</p>
                    </div>

                    <div className="review-item-body-container">
                        <p className="review-item-body">{review.body}</p>
                    </div>

                </div>
            </div>
        )
    } else {
        return null;
    }
};


export default ReviewIndexItem;