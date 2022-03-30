import React from "react";
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "../map/business_map";
import SearchBarContainer from "../search_bar/search_bar_container";
import { Link } from "react-router-dom";


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);

        this.searchBusinesses = this.searchBusinesses.bind(this)
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    // componentDidUpdate() {
    //     this.searchBusinesses();
    // }

    searchBusinesses() {
        //storing all categories for each business
        let validCategories = [];
        this.props.businesses.map(business => validCategories.push(business.category.toLowerCase()));

        let query;
        if (this.props.location.search) query = (this.props.location.search.split('=')[1]).toString();

        const allBusinesses = this.props.businesses;
        let filtered = [];

        if (!query || query === '0') { //if nothing is searched, show all businesses
            return allBusinesses;
        } else if (!validCategories.includes(query.toLowerCase())) { //if query is not in categories
            return filtered;
        } else {
            filtered = allBusinesses.filter(business => business.category.toLowerCase() === query.toLowerCase());
            return filtered;
        }
    }

    noMatchedBusinesses() {
        if (this.searchBusinesses().length === 0 && this.props.businesses) {
            return <div className="biz-index-no-results-container">
                        <h1 className="biz-index-no-results-header">No results found for your search</h1>
                        <h3 className="biz-index-no-results-suggestions">Suggestions for improving your result:</h3>

                        <ul className="biz-index-suggestions-list">
                           <li className="biz-index-suggestion-item">Check the spelling or try alternate spellings</li> 
                           <li>Try a more general search, e.g. "burgers" instead of "bacon burgers"</li> 
                        </ul>
                    </div>
        }
    }

    render() {

        if (!this.props.businesses) return null;
        // console.log(this.props.businesses);
        // console.log(this.state);
        // console.log("render", this.searchBusinesses())

        const { businesses, fetchReviews, currentUser, logout } = this.props;

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

                        {checkLoggedIn}

                    </div>


                    <aside className="biz-index-filters-aside">
                        <p className="biz-index-filters-header">Filters</p>
                    </aside>

                    <div className="biz-index-list-container">
                        <h1 className="biz-index-all-results">All Results</h1>
                        <ol className="biz-index-list">
                            {this.searchBusinesses().map(business => (
                                <BusinessIndexItem key={business.id} business={business} fetchReviews={fetchReviews} />
                            ))}
                        </ol>

                        {this.noMatchedBusinesses()}

                        <div className="biz-index-map-container">
                            {/* buggy when using the search function */}
                            <BusinessMap businesses={this.searchBusinesses()} />
                        </div>
                    </div>
                </div>

                <div className="biz-index-footer">
                    <div className="biz-index-footer-about">
                        <h3 className="biz-index-footer-title">About</h3>
                    </div>

                    <div className="biz-index-footer-discover">
                        <h3 className="biz-index-footer-title">Discover</h3>
                    </div>

                    <div className="biz-index-footer-business">
                        <h3 className="biz-index-footer-title">Smackin' for Business</h3>
                    </div>

                    <div className="biz-index-footer-languages-countries">
                        <h3 className="biz-index-footer-title">Languages</h3>
                        <p className="biz-index-footer-small-text"></p>
                        <h3 className="biz-index-footer-title">Countries</h3>
                        <p className="biz-index-footer-small-text"></p>

                    </div>
                </div>

            </div>

        )
    }
};


export default BusinessIndex;