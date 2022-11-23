import React from "react";
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "../map/business_map";
import SearchBarContainer from "../search_bar/search_bar_container";
import { Link } from "react-router-dom";
import FilterContainer from "../filter/filter_container";
import Footer from "../footer/footer";
import { useEffect } from "react";
import { displayUserOnBusiness } from "../../util/display_current_user";

const BusinessIndex = (props) => {
    const { businesses, fetchBusinesses, fetchReviews, logout, currentUser } = props;

    useEffect(() => {
        fetchBusinesses()
    }, [])

    if (businesses) {
        return(
            <div>
                <div className="biz-index-container">

                    <div className="biz-index-navbar">
                        <Link to="/" className="biz-index-back-to-homepage">
                            <h3 className="biz-index-homepage-text">smackin'</h3>
                            <img className="biz-index-logo" src={window.logo} alt="logo" />
                        </Link>

                        <div className="biz-index-searchbar">
                            <SearchBarContainer /> 
                        </div>

                        {displayUserOnBusiness(currentUser, logout)}
                    </div>

                    <aside className="biz-index-filters-aside">
                        <FilterContainer />
                    </aside>

                    <div className="biz-index-list-container">
                        <h1 className="biz-index-all-results">All Results</h1>
                        <ol className="biz-index-list">
                                {businesses.map( (business, idx) => (
                                    <BusinessIndexItem key={business.id} business={business} fetchReviews={fetchReviews} idx={idx + 1} />
                                ))}
                        </ol>

                        <div className="biz-index-map-container">
                            <BusinessMap businesses={businesses} />
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        )
    } else {
        return null;
    }
};


export default BusinessIndex;