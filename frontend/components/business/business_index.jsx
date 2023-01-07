import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "../map/business_map";
import FilterContainer from "../filter/filter_container";
import Footer from "../footer/footer";
import { useEffect, useState } from "react";


const BusinessIndex = (props) => {
    const { businesses, fetchBusinesses, fetchReviews } = props;
    const [hovering, setHovering] = useState(false);
    const [hoveringIdx, setHoveringIdx] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBusinesses();
    }, [])

    const handleHovering = (action, itemIdx) => {
        if (action === "mouseEnter") {
            setHovering(true)
            setHoveringIdx(itemIdx)
        } else if (action === "mouseLeave") {
            setHovering(false)
            setHoveringIdx("")
        }
    }

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
                                    <BusinessIndexItem key={business.id} business={business} fetchReviews={fetchReviews} idx={idx + 1} handleHovering={handleHovering} />
                                ))}
                        </ol>

                        <div className="biz-index-map-container">
                            <BusinessMap businesses={businesses} hovering={hovering} hoveringIdx={hoveringIdx} />
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