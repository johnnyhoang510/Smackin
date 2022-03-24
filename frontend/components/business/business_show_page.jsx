import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import { Link } from "react-router-dom";
import ReviewIndexContainer from "../review/review_index_container";


class BusinessShowPage extends React.Component {
    constructor(props) {
        super(props);

        //extra feature, add a open now or closed marker depending on current time/day
        this.time = new Date();
        this.minutes = this.time.getMinutes();
        this.hours = this.time.getHours() - 12;
        this.day = this.time.getDay();
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchBusiness(this.props.match.params.businessId)
    };

    
    // when keying in url, this will maintain state
    componentDidUpdate(prevProps) {
        // console.log(prevProps.businessId);
        if (prevProps.businessId !== this.props.businessId) {
            this.componentDidMount();
        }
    }
    

    render() {
        // console.log(this.props)
        const { business } = this.props;
        // on a rerender, this will allow it to hit compDidMount
        if (!business) return null;

        let rating = 0;
        business.reviews.map(review => (
            rating += review.rating
        ))
        let avgRating = (rating / business.reviews.length).toFixed(2)


        return(
            <div className="biz-show-container">

                <div className="biz-show-nav">
                    <NavBarContainer />
                </div>

                <div className="biz-show-background-photos">
                    <h1>(Background photos here)</h1>
                    {business.photoURLs.map( (photo_url, idx) => <img key={idx} className="biz-show-photo" src={photo_url} alt="" />)}
                </div>

                <div className="biz-show-header">
                    <h1 className="biz-show-name">{business.name}</h1>

                    <div className="biz-show-reviews-section">
                        <p className="biz-show-avgRating">Average rating: {avgRating}</p>
                        <p className="biz-show-numReviews">{business.reviews.length}</p>
                    </div>

                    <div className="biz-show-details-info">
                        <p className="biz-show-details-claimed">Claimed</p>
                        <p className="biz-show-details-price">{business.price}</p>
                        <p className="biz-show-details-category">{business.category}</p>
                        <p className="biz-show-details-hours">{business.hours}</p>
                    </div>
                </div>

                <div className="biz-show-write-review-container">
                    <Link to={`/businesses/${business.id}/reviews/new`} className="biz-show-review-link">Write a Review</Link>
                </div>

                <div className="biz-show-location-hours-container">
                    <h1 className="biz-show-location-hours-title">Location &amp; Hours</h1>

                    <div className="biz-show-location-hours-map-container">
                        <p>MAP COMPONENT/LINK GOES HERE</p>
                        <p className="biz-show-address">{business.address}</p>
                        <p className="biz-show-city-state">{business.city}, {business.state}</p>
                        <p className="biz-show-zip-code">{business.zip_code}</p>
                    </div>

                    <div className="biz-show-hours-container">
                        <div className="biz-show-hours-item">
                            <p className="biz-show-hours-item-day">Mon</p>
                            <p className="biz-show-hours-item-hours">{business.hours}</p>
                        </div>
                        <div className="biz-show-hours-item">
                            <p className="biz-show-hours-item-day">Tue</p>
                            <p className="biz-show-hours-item-hours">{business.hours}</p>
                        </div>
                        <div className="biz-show-hours-item">
                            <p className="biz-show-hours-item-day">Wed</p>
                            <p className="biz-show-hours-item-hours">{business.hours}</p>
                        </div>
                        <div className="biz-show-hours-item">
                            <p className="biz-show-hours-item-day">Thu</p>
                            <p className="biz-show-hours-item-hours">{business.hours}</p>
                        </div>
                        <div className="biz-show-hours-item">
                            <p className="biz-show-hours-item-day">Fri</p>
                            <p className="biz-show-hours-item-hours">{business.hours}</p>
                        </div>
                        <div className="biz-show-hours-item">
                            <p className="biz-show-hours-item-day">Sat</p>
                            <p className="biz-show-hours-item-hours">{business.hours}</p>
                        </div>
                        <div className="biz-show-hours-item">
                            <p className="biz-show-hours-item-day">Sun</p>
                            <p className="biz-show-hours-item-hours">{business.hours}</p>
                        </div>
                    </div>
                </div>

                <div className="biz-show-aside-info">
                    <div className="biz-show-aside-info-website">
                        <a className="biz-show-website-link" href={`${business.website}`} target="_blank">{business.website}</a>
                    </div>
                    <div className="biz-show-aside-info-phone-number">
                        <p className="biz-show-phone-number">{business.phone_number}</p>
                    </div>
                    <div className="biz-show-aside-info-directions">
                        <a href="#" target="_blank">Get Directions (need to source link)</a>
                    </div>
                </div>

                <div className="biz-show-rec-reviews">
                    <div className="biz-show-each-review">
                        <ReviewIndexContainer business={business}/>
                    </div>
                </div>

                <footer className="biz-show-footer-wrapper">
                    <h1>(Footer)</h1>
                </footer>

            </div>
        )
    }
};


export default BusinessShowPage;