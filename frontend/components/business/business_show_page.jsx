import React from "react";
import NavBarContainer from "../navbar/navbar_container";

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
        this.props.fetchBusiness(this.props.businessId)
    };

    
    componentDidUpdate(prevProps) {
        if (prevProps.businessId !== this.props.businessId) {
            this.componentDidMount();
        }
    }
    

    render() {
        // console.log(this.props)
        const { business } = this.props;

        // on a rerender, this will allow it to hit compDidMount
        if (!business) return null;
        
        return(
            <div className="biz-show-container">

                <div className="biz-show-nav">
                    <NavBarContainer />
                </div>

                <div className="biz-show-header">
                    <h1 className="biz-show-name">{business.name}</h1>

                    <div className="biz-show-reviews-section">
                        <p className="biz-show-avgRating">Avg Rating here</p>
                        <p className="biz-show-numReviews"># of Reviews here</p>
                    </div>

                    <div className="biz-show-details-info">
                        <p className="biz-show-details-claimed">Claimed</p>
                        <p className="biz-show-details-price">{business.price}</p>
                        <p className="biz-show-details-category">{business.category}</p>
                        <p className="biz-show-details-hours">{business.hours}</p>
                    </div>
                </div>

                <div className="biz-show-write-review-container">
                    <p className="biz-show-write-review-link">Write a Review (link to review)</p>
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

            </div>
        )
    }
};


export default BusinessShowPage;