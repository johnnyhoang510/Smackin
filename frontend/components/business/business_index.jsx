import React from "react";
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "../map/business_map";
import SearchBarContainer from "../search_bar/search_bar_container";
import { Link } from "react-router-dom";


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
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
                            {businesses.map(business => (
                                <BusinessIndexItem key={business.id} business={business} fetchReviews={fetchReviews} />
                            ))}
                        </ol>

                        <div className="biz-index-map-container">
                            {/* <BusinessMap businesses={businesses} /> */}
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