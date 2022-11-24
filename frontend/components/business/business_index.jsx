import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "../map/business_map";
import FilterContainer from "../filter/filter_container";
import Footer from "../footer/footer";
import { useEffect } from "react";

const BusinessIndex = (props) => {
    const { businesses, fetchBusinesses, fetchReviews } = props;

    useEffect(() => {
        fetchBusinesses()
    }, [])

    if (businesses) {
        return(
            <div>
                <div className="biz-index-container">

                    <NavBarContainer />

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