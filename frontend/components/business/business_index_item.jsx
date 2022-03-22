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
                <li className="biz-index-item-container">
                    <Link to={`/businesses/${business.id}`}>(whole container should be link)</Link>
                    <div className="biz-index-photo-wrapper">
                        <img className="biz-index-photo" src={renderPhoto} alt="" />
                    </div>
                    <div className="biz-index-item-name">
                        {business.name}
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
                </li>
            </div>
        )
    }
};


export default BusinessIndexItem