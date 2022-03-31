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

    render() {

        if (!this.props.business.reviews) return null;

        const {business} = this.props;
        // console.log(business)
        let renderPhoto;
        if (business.photoURLs) {
            renderPhoto = business.photoURLs[0];
        } else {
            renderPhoto = "#"
        };

        // //-----------------remove this once reviews are all seeded
        // let showReview;
        // if (business.reviews.length) {
        //     showReview = business.reviews[0].body;
        // } else {
        //     showReview = "no reviews"
        // }

        return (

            <div className="biz-index-item-wrapper">
    
                <Link to={`/businesses/${business.id}`} className="biz-index-item">

                    <div className="biz-index-item-container">
                        <img className="biz-index-photo" src={renderPhoto} alt="" />

                        <div className="biz-index-item-inner-container">

                            <div className="biz-index-item-name-container">
                                <h1 className="biz-index-item-name">{business.id}. {business.name}</h1>
                                
                                <div className="biz-index-item-rating-container">
                                    <p className="biz-index-item-rating">(star ratings go here)</p> 
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