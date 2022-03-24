import React from "react";
import BusinessIndexItem from "./business_index_item";


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        // console.log(this.props)
        const { businesses } = this.props;
        return(
            <div className="biz-index-container">
                <h1>Business index</h1>
                <br />
                <div className="biz-index-searchbar">
                    <h2>(SEARCH BAR COMPONENT HERE)</h2>
                </div>

                <div className="biz-index-list-container">
                    <ol className="biz-index-list">
                        {businesses.map(business => (
                            <BusinessIndexItem key={business.id} business={business} />
                        ))}
                    </ol>
                </div>

                <br />
                <div className="biz-index-map-container">
                    <h3>MAP COMPONENT TO THE RIGHT</h3>
                </div>
            </div>
        )
    }
};


export default BusinessIndex;