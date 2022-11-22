import React from "react";
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "../map/business_map";
import SearchBarContainer from "../search_bar/search_bar_container";
import { Link } from "react-router-dom";
import FilterContainer from "../filter/filter_container";
import Footer from "../footer/footer";
import { useEffect } from "react";
import { useState } from "react";

const BusinessIndex = (props) => {
    let { businesses } = props;
    const { query, fetchBusinesses, fetchReviews, logout, currentUser } = props;
    // const [businesses, setBusinesses] = useState([]);
    // const [query, setQuery] = useState("");

    // useEffect(() => {
    //     getBusinesses();
    // }, [])

    // const getBusinesses = async () => {
    //     const response = await fetchBusinesses(query);
    //     setBusinesses(Object.values(response.businesses))
    // }

    const checkLoggedIn = currentUser ? (
        <div className="biz-index-check-loggedin-container">
            {/* <Link to="/" className="biz-index-your-reviews">Your Reviews</Link> */}
            <h2 className="biz-index-welcome-user">Welcome, {currentUser.first_name}!</h2>
            <button className="biz-index-logout-user" onClick={logout}>Log out</button>
        </div>
    ) : (
        <div className="biz-index-login-signup-buttons">
            <Link className="biz-index-login-button" to='/login'>Log In</Link>
            <Link className="biz-index-signup-button" to='/signup'>Sign Up</Link>
        </div>
    )
    
    let showErrors;
    let noResults;
    let suggestions;
    let suggestionsLi;

    if (props.errors.length) {
        businesses = [];

        showErrors = props.errors.map((err, idx) => (
            <li key={idx}>{err}</li>
        ))

        noResults = "Suggestions for improving your result:"
        suggestions = ['Check the spelling or try alternate spellings', 'Try a more general search, e.g. "burgers" instead of "bacon burgers']
        suggestionsLi = suggestions.map((sugg, idx) => (
            <li key={idx} className="biz-index-suggestion-item">{sugg}</li>
        ))
    }

    if (businesses) {
        return(
            <div>
                <div className="biz-index-container">

                    {/* <div className="biz-index-navbar">
                        <Link to="/" className="biz-index-back-to-homepage">
                            <h3 className="biz-index-homepage-text">smackin'</h3>
                            <img className="biz-index-logo" src={window.logo} alt="logo" />
                        </Link>

                        <div className="biz-index-searchbar">
                            <SearchBarContainer /> 
                        </div>

                        {checkLoggedIn}
                    </div> */}

                    <aside className="biz-index-filters-aside">
                        <FilterContainer />
                    </aside>

                    <div className="biz-index-list-container">
                        <h1 className="biz-index-all-results">All Results</h1>
                        <ol className="biz-index-list">
                                {businesses.map( (business, idx) => (
                                    <BusinessIndexItem key={business.id} business={business} fetchReviews={fetchReviews} idx={idx + 1} />
                                ))}
                                <div className="biz-index-no-results-container">
                                    <h1 className="biz-index-no-results-header">{showErrors}</h1>
                                    <h3 className="biz-index-no-results-suggestions">{noResults}</h3>

                                    <ul className="biz-index-suggestions-list">
                                        {suggestionsLi}
                                    </ul>
                                </div>
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