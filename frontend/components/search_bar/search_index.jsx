import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import BusinessIndexItem from "../business/business_index_item";
import BusinessMap from "../map/business_map";
import FilterContainer from "../filter/filter_container";
import Footer from "../footer/footer";
import { useState, useEffect } from "react";

const SearchIndex = (props) => {
    const { errors, clearErrors, fetchReviews, fetchBusinesses } = props;
    let [businesses, setBusinesses] = useState([]);
    
    useEffect(() => {
        window.scrollTo(0,0);
        getBusinesses();

    }, [])

    useEffect(() => {
        getBusinesses();

        return () => {
            clearErrors();
        }
        
    }, [props.match.params.query])

    const getBusinesses = async () => {
        try {
            const response = await fetchBusinesses(props.match.params.query);
            setBusinesses(Object.values(response.businesses))
        } catch (error) {
            console.log(error)
        }
    }

    let showErrors;
    let noResults;
    let suggestions;
    let suggestionsLi;
    
    if (errors.length) {
        businesses = [];

        showErrors = errors.map( (err, idx) => (
            <li key={idx}>{err}</li>
        ))

        noResults = "Suggestions for improving your result:"
        suggestions = ['Check the spelling or try alternate spellings', 'Try a more general search, e.g. "burgers" instead of "bacon burgers']
        suggestionsLi = suggestions.map( (sugg, idx) => (
            <li key={idx} className="biz-index-suggestion-item">{sugg}</li>
        ))
    }

    if (businesses) {
        return (
            <div className="biz-index-item-wrapper">

                <div className="biz-index-container">

                    <NavBarContainer />

                    <aside className="biz-index-filters-aside">
                        <FilterContainer />
                    </aside>

                    <div className="biz-index-list-container">
                        <h1 className="biz-index-all-results">All Results</h1>
                        <ol className="biz-index-list">
                            {businesses.map((business, idx) => (
                                <BusinessIndexItem key={business.id} business={business} fetchReviews={fetchReviews} idx={idx + 1} />
                                ))
                            }
                            <div className="biz-index-no-results-container">
                                <h1 className="biz-index-no-results-header">{showErrors}</h1>
                                <h3 className="biz-index-no-results-suggestions">{noResults}</h3>

                                <ul className="biz-index-suggestions-list">
                                    {suggestionsLi}
                                </ul>
                            </div>
                        </ol>

                        <div className="search-index-map-container">
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


export default SearchIndex;