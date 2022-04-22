import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import { Link } from "react-router-dom";
import ReviewIndexContainer from "../review/review_index_container";
import SearchBarContainer from "../search_bar/search_bar_container";
import { BsFillCheckCircleFill, BsInfoCircleFill, BsStar, BsArrowUpRightSquare, BsTelephoneOutbound, BsArrow90DegRight } from "react-icons/bs";
import BusinessMap from "../map/business_map";

class BusinessShowPage extends React.Component {
    constructor(props) {
        super(props);

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

    checkAvgStarRating() {
        let rating = 0;
        this.props.business.reviews.map(review => (
            rating += review.rating
        ))
        let avgRating = (rating / this.props.business.reviews.length).toFixed(1);
        
        if (avgRating >= 4.8) {
            return "biz-show-rating-5";
        } else if (avgRating >= 4.3 && avgRating <= 4.7) {
            return "biz-show-rating-4-5";
        } else if (avgRating >= 3.8 && avgRating <= 4.2) {
            return "biz-show-rating-4";
        } else if (avgRating >= 3.3 && avgRating <= 3.7) {
            return "biz-show-rating-3-5";
        } else if (avgRating >= 2.8 && avgRating <= 3.2) {
            return "biz-show-rating-3";
        } else if (avgRating >= 2.3 && avgRating <= 2.7) {
            return "biz-show-rating-2-5";
        } else if (avgRating >= 1.8 && avgRating <= 2.2) {
            return "biz-show-rating-2";
        } else if (avgRating >= 1.3 && avgRating <= 1.7) {
            return "biz-show-rating-1-5";
        } else if (avgRating >= 0.5 && avgRating <= 1.2) {
            return "biz-show-rating-1";
        } else if (avgRating >= 0 && avgRating <= 0.4) {
            return "biz-show-rating-0";
        }
    }

    convertTime(time12h) {
        const [time, modifier] = time12h.split(' ');

        let [hours, minutes] = time.split(':');

        if (hours === '12') hours = "00";
        if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

        return `${hours}:${minutes}`;
    }

    checkOpenOrClosed(day) {
        let openingTime = this.convertTime(this.props.business.hours.split('-')[0]);
        let closingTime = this.convertTime(this.props.business.hours.split('-')[1]);

        let currentDate = new Date();
        
        let openingDate = new Date(currentDate.getTime());
        openingDate.setHours(openingTime.split(":")[0]);
        openingDate.setMinutes(openingTime.split(":")[1]);

        let closingDate = new Date(currentDate.getTime());
        closingDate.setHours(closingTime.split(":")[0]);
        closingDate.setMinutes(closingTime.split(":")[1]);

        let openText;
        let closedText;

        if (day === currentDate.getDay()) {
            if (openingDate < currentDate && closingDate > currentDate) {
                openText = <span id="open-now">Open now</span>
                return openText;
            } else {
                closedText = <span id="closed">Closed now</span>;
                return closedText;
            }
        } else {
            return null;
        }
    }
    

    render() {
        const { business, currentUser, logout } = this.props;

        if (!business) return null;


        const checkLoggedIn = currentUser ? (
            <div className="biz-index-check-loggedin-container">
                {/* <Link to="/" className="biz-index-your-reviews">Your Reviews</Link> */}
                <h2 className="biz-index-welcome-user">Welcome, {currentUser.first_name}!</h2>
                <button className="biz-index-logout-user" onClick={logout}>Log out</button>
            </div>
        ) : (
            <div className="biz-index-login-signup-buttons">
                <Link className="biz-index-login-button" to='/login'>Log In</Link>
                <Link className="biz-index-signup-button" to='/signup'>Sign Up</Link>
            </div>
        )


        const today = new Date();

        return(

            <div className="biz-show-container">

                <div className="biz-index-navbar">
                    <Link to="/" className="biz-index-back-to-homepage">
                        <h3 className="biz-index-homepage-text">smackin'</h3>
                        <img className="biz-index-logo" src={window.logo} alt="logo" />
                    </Link>

                    <div className="biz-index-searchbar">
                        <SearchBarContainer />
                    </div>

                    {checkLoggedIn}

                </div>

                <div className="biz-show-background-photos">
                    {business.photoURLs.slice(0,3).map( (photo_url, idx) => <img key={idx} className="biz-show-photo" src={photo_url} alt="" />)}
                </div>
                <div className="biz-show-photo-gradient">
                </div>

                <div className="biz-show-header">
                    <h1 className="biz-show-name">{business.name}</h1>

                    <div className="biz-show-reviews-section">
                        <p id="biz-show-avgRating" className={this.checkAvgStarRating()}></p>
                        <p className="biz-show-numReviews">{business.reviews.length} reviews</p>
                    </div>

                    <div className="biz-show-details-info">
                        <p className="biz-show-details-claimed"><BsFillCheckCircleFill/> Claimed</p>
                        <p className="biz-show-details-price">   •   {business.price}   •   </p>
                        <p className="biz-show-details-category">{business.category}</p>
                    </div>

                    <div className="biz-show-details-hours-wrapper">
                        <p className="biz-show-details-hours">{this.checkOpenOrClosed(today.getDay())} &ensp; {business.hours}</p>
                        <p className="biz-show-details-hours-update">&ensp;<BsInfoCircleFill />  Hours updated {Math.floor(Math.random() * 12) + 2} months ago</p>
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
                        <a href={`https://maps.google.com/?q=${business.lat},${business.lng}`} target="_blank"><img src={business.photoURLs[business.photoURLs.length - 1]} alt="map" className="biz-show-map" /></a>
                        <p className="biz-show-address">{business.address}</p>
                        <p className="biz-show-city-state">{business.city}, {business.state} {business.zip_code}</p>
                    </div>


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
                            <p className="biz-show-hours">{business.hours}  &ensp; {this.checkOpenOrClosed(1)}</p>
                            <p className="biz-show-hours">{business.hours}  &ensp; {this.checkOpenOrClosed(2)}</p>
                            <p className="biz-show-hours">{business.hours}  &ensp; {this.checkOpenOrClosed(3)}</p>
                            <p className="biz-show-hours">{business.hours}  &ensp; {this.checkOpenOrClosed(4)}</p>
                            <p className="biz-show-hours">{business.hours}  &ensp; {this.checkOpenOrClosed(5)}</p>
                            <p className="biz-show-hours">{business.hours}  &ensp; {this.checkOpenOrClosed(6)}</p>
                            <p className="biz-show-hours">{business.hours}  &ensp; {this.checkOpenOrClosed(0)}</p>
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
                                <a className="biz-show-aside-directions-link" href={`https://maps.google.com/?q=${business.lat},${business.lng}`} target="_blank">Get Directions</a>
                            
                                <div className="biz-show-aside-address-container">
                                    <p className="biz-show-aside-address">{business.address} {business.city}, {business.state}</p>
                                    <p className="biz-show-aside-zipcode">{business.zip_code}</p>
                                </div>
                            </div>
                            <div className="biz-show-aside-directions-icon"><BsArrow90DegRight /></div>
                        </div>

                    </div>
                </div>


                <div className="biz-show-rec-reviews">
                    <div className="biz-show-each-review">
                        <ReviewIndexContainer business={business}/>
                    </div>
                </div>

                <div className="biz-homepage-footer">
                    <div className="biz-index-footer-about">
                        <h3 className="biz-index-footer-title">About</h3>
                        <a className="footer-link" href="https://github.com/johnnyhoang510" target="_blank">Github</a>
                        <a className="footer-link" href="https://www.linkedin.com/in/hoangjohnny/" target="_blank">LinkedIn</a>
                    </div>

                    <div className="biz-index-footer-discover">
                        <h3 className="biz-index-footer-title">Discover</h3>
                        <a className="footer-link" href="https://johnnyhoang510.github.io/portfolio-website/" target="_blank">Portfolio</a>
                        <a className="footer-link" href="https://angel.co/u/johnnyhoang510" target="_blank">AngelList</a>
                    </div>
                </div>

            </div>
        )
    }
};


export default BusinessShowPage;