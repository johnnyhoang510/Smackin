import React from "react";

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {business} = this.props;

        return (
            <div className="biz-index-item-wrapper">
                <li className="biz-index-item-container">
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