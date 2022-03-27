import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import { Link } from "react-router-dom";
import ReviewIndexContainer from "../review/review_index_container";
import SearchBarContainer from "../search_bar/search_bar_container";
import { BsFillCheckCircleFill, BsInfoCircleFill, BsStar, BsArrowUpRightSquare, BsTelephoneOutbound, BsArrow90DegRight } from "react-icons/bs";

class BusinessShowPage extends React.Component {
    constructor(props) {
        super(props);

        //work on if extra time
        this.time = new Date();
        this.minutes = this.time.getMinutes();
        this.hours = this.time.getHours() - 12;
        this.day = this.time.getDay();
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchBusiness(this.props.match.params.businessId);
        window.scrollTo(0, 0)
    };

    
    componentDidUpdate(prevProps) {
        if (prevProps.businessId !== this.props.businessId) {
            this.componentDidMount();
        }
    }
    

    render() {
        // console.log(this.props)
        const { business } = this.props;

        if (!business) return null;

        let rating = 0;
        business.reviews.map(review => (
            rating += review.rating
        ))
        let avgRating = (rating / business.reviews.length).toFixed(1)


        return(
            <div className="biz-show-container">

                <div className="biz-show-searchbar">
                    {/* <SearchBarContainer /> */}
                    <NavBarContainer />
                </div>

                <div className="biz-show-background-photos">
                    {business.photoURLs.map( (photo_url, idx) => <img key={idx} className="biz-show-photo" src={photo_url} alt="" />)}
                </div>
                <div className="biz-show-photo-gradient">
                </div>

                <div className="biz-show-header">
                    <h1 className="biz-show-name">{business.name}</h1>

                    <div className="biz-show-reviews-section">
                        <p className="biz-show-avgRating">Average rating: {avgRating}</p>
                        <p className="biz-show-numReviews">{business.reviews.length} reviews</p>
                    </div>

                    <div className="biz-show-details-info">
                        <p className="biz-show-details-claimed"><BsFillCheckCircleFill/> Claimed</p>
                        <p className="biz-show-details-price">   •   {business.price}   •   </p>
                        <p className="biz-show-details-category">{business.category}</p>
                    </div>

                    <div className="biz-show-details-hours-wrapper">
                        <p className="biz-show-details-hours">{business.hours}</p>
                        <p className="biz-show-details-hours-update">  <BsInfoCircleFill />  Hours updated {Math.floor(Math.random() * 12) + 2} months ago</p>
                    </div>
                </div>

                <button className="biz-show-write-review-button">
                    <Link to={`/businesses/${business.id}/reviews/new`} className="biz-show-review-link"> <BsStar className="review-star-icon"/> Write a Review</Link>
                </button>

                <div className="biz-show-review-hours-border">
                </div>

                <div className="biz-show-location-hours-container">

                    <div className="biz-show-location-hours-map-container">
                        <h1 className="biz-show-location-hours-title">Location &amp; Hours</h1>
                        <p className="biz-show-map">MAP PHOTO GOES HERE</p>
                        <p className="biz-show-address">{business.address}</p>
                        <p className="biz-show-city-state">{business.city}, {business.state} {business.zip_code}</p>
                    </div>

                    {/* <div className="biz-show-hours-container">
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
                    </div> */}

                    <div className="biz-show-hours-day-container">
                        <div className="biz-show-day-container">
                            <p className="biz-show-day">Mon</p>
                            <p className="biz-show-day">Tue</p>
                            <p className="biz-show-day">Wed</p>
                            <p className="biz-show-day">Thu</p>
                            <p className="biz-show-day">Fri</p>
                            <p className="biz-show-day">Sat</p>
                            <p className="biz-show-day">Sun</p>
                        </div>

                        <div className="biz-show-hours-container">
                            <p className="biz-show-hours">{business.hours}</p>
                            <p className="biz-show-hours">{business.hours}</p>
                            <p className="biz-show-hours">{business.hours}</p>
                            <p className="biz-show-hours">{business.hours}</p>
                            <p className="biz-show-hours">{business.hours}</p>
                            <p className="biz-show-hours">{business.hours}</p>
                            <p className="biz-show-hours">{business.hours}</p>
                        </div>
                    </div>

                </div>

                <div className="biz-show-aside-container">
                    <div className="biz-show-aside-info">
                        <div className="biz-show-aside-info-website">
                            <a className="biz-show-website-link" href={`${business.website}`} target="_blank">{business.website}</a>
                            <a href={`${business.website}`} className="biz-show-website-icon"><BsArrowUpRightSquare /></a>
                        </div>
                        <div className="biz-show-aside-info-phone-number">
                            <p className="biz-show-phone-number">{business.phone_number}</p>
                            <p className="biz-show-phone-icon"><BsTelephoneOutbound /></p>
                        </div>
                        <div className="biz-show-aside-info-directions">
                            <div className="biz-show-aside-directions-container">
                                <a className="biz-show-aside-directions-link" href="#" target="_blank">Get Directions (need to source link)</a>
                            
                                <div className="biz-show-aside-address-container">
                                    <p className="biz-show-aside-address">{business.address} {business.city}, {business.state}</p>
                                    <p className="biz-show-aside-zipcode">{business.zip_code}</p>
                                </div>
                            </div>
                            <div className="biz-show-aside-directions-icon"><BsArrow90DegRight /></div>
                        </div>

                    </div>
                </div>


                {/* --- BROKEN. ONLY SHOWS REVIEWS WHEN LOGGED IN */}
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