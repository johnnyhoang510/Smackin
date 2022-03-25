import React from "react";
import { Link } from "react-router-dom";

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {business} = this.props;
        // console.log(business)
        let renderPhoto;
        if (business.photoURLs) {
            renderPhoto = business.photoURLs.shift();
        } else {
            renderPhoto = "#"
        };

        return (
            <div className="biz-index-item-wrapper">
    
                <Link to={`/businesses/${business.id}`} className="biz-index-item">
                    <img className="biz-index-photo" src={renderPhoto} alt="" />
                    <div className="biz-index-item-name-container">
                        <h1 className="biz-index-item-name">{business.name}</h1>
                    </div>
                    <div className="biz-index-item-avgRating">
                        AvgRating goes here
                    </div>
                    <div className="biz-index-item-numReviews">
                        # of Reviews goes here
                    </div>
                    <div className="biz-index-item-category">
                        {business.category}
                    </div>
                    <div className="biz-index-item-hours">
                        {business.hours}
                    </div>

                </Link>
            </div>
        )
    }
};


export default BusinessIndexItem