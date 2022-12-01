import React from "react";
import { BsStarFill } from "react-icons/bs";
import { displayUserInReviewForm } from "../../util/display_current_user";
import { useState, useEffect } from "react";

const CreateReviewForm = (props) => {
    const { business, errors, currentUser, clearReviewErrors, fetchBusiness, user_id, createReview, logout } = props;
    const [rating, setRating] = useState(0);
    const [body, setBody] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchBusiness(props.match.params.businessId)

        return () => {
            clearReviewErrors();
        }
    }, [])

    useEffect(() => {
        fetchBusiness(props.match.params.businessId)

    }, [props.match.params.businessId])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            rating,
            body,
            user_id,
            business_id: business.id
        }
        createReview(newReview, business.id)
            .then(() => props.history.push(`/businesses/${business.id}`))
    }

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

    const ratingText = () => {  
        switch (rating) {
            case 0:
                return "Select your rating"
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
    if (errors.length || rating === 0) {
        showErrors = errors.responseJSON
    } else {
        showErrors = null;
    };

    if (business) {
        return(
            <div>
                {displayUserInReviewForm(currentUser, handleLogout)}

                <div className="create-review-form-container">

                    <h1 className="create-review-form-title">{business.name}</h1>

                    <form className="create-review-form" onSubmit={handleSubmit}>
                        <div className="create-review-form-rating-wrapper">

                            <div className="create-form-stars-container">
                                <input id="rating-1" type="radio"  value="5" onChange={(e) => update(e, 'rating')} name="rating"/>
                                <label htmlFor="rating-1" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-2" type="radio"  value="4" onChange={(e) => update(e, 'rating')} name="rating"/>
                                <label htmlFor="rating-2" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-3" type="radio"  value="3" onChange={(e) => update(e, 'rating')} name="rating"/>
                                <label htmlFor="rating-3" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-4" type="radio"  value="2" onChange={(e) => update(e, 'rating')} name="rating"/>
                                <label htmlFor="rating-4" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-5" type="radio"  value="1" onChange={(e) => update(e, 'rating')} name="rating"/>
                                <label htmlFor="rating-5" id="create-review-form-rating"><BsStarFill className="review-star" /></label>
                            </div>
                            
                            <p className="select-your-rating">{ratingText()}</p>
                        </div>

                        <textarea autoFocus rows="25" cols="70" className="create-review-form-textarea" onChange={(e) => update(e, 'body')} placeholder="Doesn't look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow... there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). Not much else to say besides go see for yourself! You won't be disappointed." required></textarea>
                        <div className="create-review-form-errors">
                                <p className="create-review-show-errors">{showErrors}</p>
                        </div>
                        <br />
                        <button type="submit" className="create-review-form-submit">Post Review</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return null;
    }
};


export default CreateReviewForm;