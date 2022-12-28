import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserReviewIndexItem = (props) => {
    const { review, fetchBusiness} = props;
    
    const [business, setBusiness] = useState("");
    
    useEffect(() => {
        fetchBusiness(review.business_id)
            .then(res => setBusiness(res.business))
    }, [])

    useEffect(() => {
        fetchBusiness(review.business_id)
            .then(res => setBusiness(res.business))
    }, [review])

    const checkAvgStarRating = (rating) => {

        switch (rating) {
            case 5:
                return "biz-show-rating-5"        
            case 4:
                return "biz-show-rating-4"        
            case 3:
                return "biz-show-rating-3"        
            case 2:
                return "biz-show-rating-2"        
            case 1:
                return "biz-show-rating-1"        
            default:
                break;
        }
    }

    const beautifyDate = (date) => {
        if (!date) return null;
        const dateSplit = date.split("T")[0];
        const [year, month, day] = dateSplit.split("-")

        return `${month}/${day}/${year}`
    }

    if (business !== "") {
        return(
            <div className="review-item-container">
                <div className="pic-heading-container">
                    <Link to={`/businesses/${business.id}`}><img src={business.photoURLs[0]} alt="" className="user-review-photo"/></Link>
                    <div className="heading-container">
                        <Link className="review-item-biz-name" to={`/businesses/${business.id}`}>{business.name}</Link>
                        <p className="price-category-container"><span className="review-item-biz-price">{business.price}</span> • <span className="review-item-biz-category">{business.category}</span></p>
                        <p className="city-state">{business.address}</p>
                        <p className="city-state">{business.city}, {business.state}</p>
                    </div>
                </div>

                <div className="reviews-date-container">
                    <span id="review-item-avgRating" className={checkAvgStarRating(review.rating)}></span>
                    <span className="review-created-date">{beautifyDate(review.created_at)}</span>
                </div>
                <p className="review-body">{review.body}</p>
            </div>
        )
    } else {
        return null;
    };
};

export default UserReviewIndexItem;