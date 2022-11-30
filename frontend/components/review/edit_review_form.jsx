import React from "react";
import { BsStarFill } from "react-icons/bs";
import { displayUserInReviewForm } from "../../util/display_current_user";
import { useState, useEffect } from "react";

const EditReviewForm = (props) => {
    const { review, business, businessId, currentUser, errors, fetchReview, user_id, updateReview, fetchBusiness, clearReviewErrors, logout } = props;
    const [rating, setRating] = useState(0);
    const [body, setBody] = useState("");

    useEffect(() => {
        window.scrollTo(0,0);
        fetchBusiness(props.match.params.businessId);
        fetchReview(props.match.params.businessId, props.match.params.reviewId);

        return () => {
            clearReviewErrors();
        }
    }, [])

    useEffect(() => {
        if (review) {
            setRating(review.rating)
            setBody(review.body)
        }
    }, [review])

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedReview = {
            id: review.id,
            rating,
            body,
            user_id,
            business_id: business.id
        }
        updateReview(editedReview, businessId)
            .then(() => props.history.push(`/businesses/${business.id}`))
    };

    const handleLogout = (e) => {
        e.preventDefault();
        logout()
            .then(() => props.history.push(`/businesses/${business.id}`))
    }

    const update = (e, field) => {
        if (field === 'rating') {
            setRating(parseInt(e.currentTarget.value))
        } else {
            setBody(e.currentTarget.value)
        }
    }

    const checkedText = () => {
        switch (rating) {
            case 1:
                return "Not good"
            case 2:
                return "Could've been better"
            case 3:
                return "OK"
            case 4:
                return "Good"                
            case 5:
                return "Great"                
            default:
                break;
        }
    }

    let showErrors;
    if (errors.length) {
        showErrors = errors.map((err, idx) => (
            <li key={`err-${idx}`}>{err}</li>
        ))
    };

    if (business && review) {
        return(
            <div>
                {displayUserInReviewForm(currentUser, handleLogout)}

                <div className="edit-review-form-container">

                    <h1 className="edit-review-form-title">{business.name}</h1>

                    <form className="edit-review-form" onSubmit={handleSubmit}>
                        <div className="edit-review-form-rating-wrapper">

                            <div className="edit-form-stars-container">
                                <input id="rating-1" type="radio" value="5" onChange={(e) => update(e, 'rating')} name="rating" checked={rating === 5 ? true : false}/>
                                <label htmlFor="rating-1" id="edit-review-form-rating"><BsStarFill className="review-star"/></label>

                                <input id="rating-2" type="radio" value="4" onChange={(e) => update(e, 'rating')} name="rating" checked={rating === 4 ? true : false}/>
                                <label htmlFor="rating-2" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-3" type="radio" value="3" onChange={(e) => update(e, 'rating')} name="rating" checked={rating === 3 ? true : false}/>
                                <label htmlFor="rating-3" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-4" type="radio" value="2" onChange={(e) => update(e, 'rating')} name="rating" checked={rating === 2 ? true : false}/>
                                <label htmlFor="rating-4" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-5" type="radio" value="1" onChange={(e) => update(e, 'rating')} name="rating" checked={rating === 1 ? true : false}/>
                                <label htmlFor="rating-5" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>
                            </div>

                            <p className="select-your-rating">{checkedText()}</p>
                        </div>

                        <textarea autoFocus rows="25" cols="70" className="edit-review-form-textarea" onChange={(e) => update(e, 'body')} defaultValue={`${body}`} required />
                        <br />
                        <button type="submit" className="edit-review-form-submit">Edit Review</button>
                    </form>

                    <div className="edit-review-form-errors">
                        <ul className="edit-review-show-errors">
                            {showErrors}
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
};


export default EditReviewForm