import React from "react";
import { Link } from "react-router-dom";
import { BiMessage } from "react-icons/bi"

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.business.id)
    }

    checkAvgStarRating() {
        let rating = 0;
        this.props.business.reviews.map(review => (
            rating += review.rating
        ))
        let avgRating = (rating / this.props.business.reviews.length).toFixed(1);

        if (avgRating >= 4.8) {
            return "biz-index-item-rating-5";
        } else if (avgRating >= 4.3 && avgRating <= 4.7) {
            return "biz-index-item-rating-4-5";
        } else if (avgRating >= 3.8 && avgRating <= 4.2) {
            return "biz-index-item-rating-4";
        } else if (avgRating >= 3.3 && avgRating <= 3.7) {
            return "biz-index-item-rating-3-5";
        } else if (avgRating >= 2.8 && avgRating <= 3.2) {
            return "biz-index-item-rating-3";
        } else if (avgRating >= 2.3 && avgRating <= 2.7) {
            return "biz-index-item-rating-2-5";
        } else if (avgRating >= 1.8 && avgRating <= 2.2) {
            return "biz-index-item-rating-2";
        } else if (avgRating >= 1.3 && avgRating <= 1.7) {
            return "biz-index-item-rating-1-5";
        } else if (avgRating >= 0.5 && avgRating <= 1.2) {
            return "biz-index-item-rating-1";
        } else if (avgRating >= 0 && avgRating <= 0.4) {
            return "biz-index-item-rating-0";
        }
    }

    render() {

        if (!this.props.business.reviews) return null;

        const {business, idx} = this.props;

        return (

            <div className="biz-index-item-wrapper">
    
                <Link to={`/businesses/${business.id}`} className="biz-index-item">

                    <div className="biz-index-item-container">
                        <img className="biz-index-photo" src={business.photoURLs[0]} alt="" />

                        <div className="biz-index-item-inner-container">

                            <div className="biz-index-item-name-container">
                                <h1 className="biz-index-item-name">{idx}. {business.name}</h1>
                                
                                <div className="biz-index-item-rating-container">
                                    <p id="biz-index-item-avgRating" className={this.checkAvgStarRating()}></p> 
                                    <p className="biz-index-item-numReviews">{business.reviews.length}</p> 
                                </div>
                            </div>

                            <div className="biz-index-item-details">
                                <h3 className="biz-index-item-category">{business.category}</h3>
                                <h3 className="biz-index-item-price">{business.price}</h3>
                            </div>

                            <p className="biz-index-item-hours">Hours: {business.hours}</p>
                            <div className="biz-index-item-review-wrapper">
                                <p className="biz-index-item-review-icon"><BiMessage/></p>
                                <p className="biz-index-item-review-body">"{business.reviews[0].body}"</p>
                            </div>

                        </div>

                    </div>
                </Link>
            </div>
        )
    }
};


export default BusinessIndexItem