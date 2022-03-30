import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container";


class Homepage extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {

        const { currentUser, logout } = this.props;

        const display = currentUser ? (
            <div className="homepage-welcome-user-wrapper">
                <h2 className="homepage-welcome-user">Welcome, {currentUser.first_name}!</h2>
                <button className="homepage-logout-user" onClick={logout}>Log out</button>
            </div>
        ) : (
            <div className="homepage-login-signup-buttons">
                <Link className="homepage-login-button" to='/login'>Log In</Link>
                <Link className="homepage-signup-button" to='/signup'>Sign Up</Link>
            </div>
        )

        return(
            <div>

                <div className="homepage-container">
                    <div className="homepage-bg-photo-wrapper">
                        <img className="homepage-bg-photo" src={window.homepageBG} alt="background-photo" />
                    </div>

                    <div className="homepage-links-container">
                        <div className="homepage-biz-wrapper">
                            <Link to="/businesses" className="homepage-biz-link">Browse Businesses</Link>
                        </div>

                        <div className="homepage-check-login">
                            {display}
                        </div>
                    </div>

                    <Link to="/" className="homepage-title-logo-wrapper">
                        <h1 className="homepage-title">smackin'</h1>
                        <img className="homepage-logo" src={window.logo} alt="logo" />
                    </Link>
                </div>

                <div className="homepage-searchbar-container">
                    <SearchBarContainer className="homepage-searchbar"/>
                </div>

                <div className="homepage-best-businesses-container">
                    <h2 className="homepage-best-businesses-title">Find the Best Businesses in Town</h2>

                    <div className="homepage-best-businesses-photos-container">

                        {/* will need to make each box a link when search query is done */}
                        <div className="homepage-best-business-photo-box">
                            <img className="homepage-best-business-photo" src={window.mexicanPhoto} alt="tacos" />
                            <p className="homepage-best-business-photo-text">Mexican</p>
                        </div>
                        <div className="homepage-best-business-photo-box">
                            <img className="homepage-best-business-photo" src={window.thaiPhoto} alt="thai-food" />
                            <p className="homepage-best-business-photo-text">Thai</p>
                        </div>
                        <div className="homepage-best-business-photo-box">
                            <img className="homepage-best-business-photo" src={window.burgerPhoto} alt="burger" />
                            <p className="homepage-best-business-photo-text">Burgers</p>
                        </div>
                        <div className="homepage-best-business-photo-box">
                            <img className="homepage-best-business-photo" src={window.japanesePhoto} alt="sushi" />
                            <p className="homepage-best-business-photo-text">Japanese</p>
                        </div>

                    </div>
                </div>

                <div className="biz-homepage-footer">
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


export default Homepage;