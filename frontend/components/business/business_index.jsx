import React from "react";
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "../map/business_map";
import SearchBarContainer from "../search_bar/search_bar_container"


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        // console.log(this.props)
        const { businesses, fetchReviews } = this.props;
        return(
            <div>

                <div className="biz-index-container">
                    <h1>Business index</h1>
                    <br />
                    <div className="biz-index-searchbar">
                        <SearchBarContainer /> 
                    </div>

                    <aside className="biz-index-filters-aside">
                        <p className="biz-index-filters-header">Filters</p>
                    </aside>

                    <div className="biz-index-list-container">
                        <h1 className="biz-index-all-results">All Results</h1>
                        <ol className="biz-index-list">
                            {businesses.map(business => (
                                <BusinessIndexItem key={business.id} business={business} fetchReviews={fetchReviews} />
                            ))}
                        </ol>

                        <div className="biz-index-map-container">
                            {/* <BusinessMap businesses={businesses} /> */}
                        </div>
                    </div>
                </div>

            </div>

        )
    }
};


export default BusinessIndex;