import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container";
import Footer from "../footer/footer";
import { GiSmallFire } from "react-icons/gi";
import { BsPersonCircle, BsBoxArrowRight } from "react-icons/bs";
import { useState, useRef } from "react";
import useOutsideClick from "../../util/use_outside_click";

const Homepage = (props) => {
    
    window.scrollTo(0, 0);
    const { currentUser, logout } = props;

    const [showDropdown, setShowDropdown] = useState(false);
    const [hovering, setHovering] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (showDropdown) setShowDropdown(false);
    })

    const handleDropdown = () => {
        if (!showDropdown) {
            return "hidden-dropdown";
        }
    };

    const handleTooltip = () => {
        if (!hovering) {
            return "hidden-tooltip"
        }
    }

    const display = currentUser ? (
        <div className="homepage-welcome-user-wrapper">
            <BsPersonCircle className="user-profile-logo" onClick={() => setShowDropdown(!showDropdown)} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}></BsPersonCircle>
            { showDropdown && (
                <div ref={ref} id={handleDropdown()} className="user-profile-hidden-dropdown">
                    <Link to={`users/${currentUser.id}/reviews`} className="about-me-row">
                        <BsPersonCircle className="mini-about-me-logo"></BsPersonCircle>
                        <span className="about-me-text">About Me</span>
                    </Link>
                    <p onClick={logout} className="logout-row"><BsBoxArrowRight className="logout-box-logo"></BsBoxArrowRight><span className="user-logout-text">Log out</span></p>
                </div> )
            }
            { hovering && ( 
                <div id={handleTooltip()} className="tooltip">
                    <span className="tooltiptext">{currentUser.first_name} {currentUser.last_name[0]}.</span>
                </div> )
            }
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

                <div className="homepage-title-logo-wrapper">
                    <h1 className="homepage-title">smackin'</h1>
                    <img className="homepage-logo" src={window.logo} alt="logo" />
                </div>
            </div>

            <div className="homepage-searchbar-container">
                <SearchBarContainer 
                    className="homepage-searchbar"
                />
            </div>

            <div className="homepage-best-businesses-container">
                <h2 className="homepage-best-businesses-title">Find the Best Businesses in Town</h2>

                <div className="homepage-best-businesses-photos-container">
                    <Link to="businesses/search/tacos" className="homepage-best-business-photo-box">
                        <img className="homepage-best-business-photo" src={window.mexicanPhoto} alt="tacos" />
                        <p className="homepage-best-business-photo-text">Mexican</p>
                    </Link>
                    <Link to="businesses/search/thai" className="homepage-best-business-photo-box">
                        <img className="homepage-best-business-photo" src={window.thaiPhoto} alt="thai-food" />
                        <p className="homepage-best-business-photo-text">Thai</p>
                    </Link>
                    <Link to="businesses/search/burgers" className="homepage-best-business-photo-box">
                        <img className="homepage-best-business-photo" src={window.burgerPhoto} alt="burger" />
                        <p className="homepage-best-business-photo-text">Burgers</p>
                    </Link>
                    <Link to="businesses/search/japanese" className="homepage-best-business-photo-box">
                        <img className="homepage-best-business-photo" src={window.japanesePhoto} alt="sushi" />
                        <p className="homepage-best-business-photo-text">Japanese</p>
                    </Link>
                </div>
            </div>

            <div className="smackin-oakland-container">
                <h2 className="smackin-oakland-title">Smackin' Oakland</h2>
                <div className="smackin-cities-container">
                    <p className="smackin-city">Berkeley</p>
                    <p className="smackin-city">San Francisco</p>
                    <p className="smackin-city">Austin</p>
                    <p className="smackin-city">Boston</p>
                    <p className="smackin-city">New York</p>
                    <p className="smackin-city">San Jose</p>
                    <p className="smackin-city">Los Angeles</p>
                    <p className="smackin-city">Chicago</p>
                    <p className="smackin-city">Houston</p>
                    <p className="smackin-city">Atlanta</p>
                </div>
            </div>

            <div className="homepage-hot-businesses-container">
                <h2 className="homepage-hot-businesses-title">Hot &amp; New Businesses</h2>
                <div className="homepage-hot-businesses-links-container">
                    <Link to="businesses/18" className="homepage-hot-businesses-link">
                        <img src={window.izzaHot} alt="izza-restaurant" className="hot-new-photo"/>
                        <p className="hot-new-title">Izza</p>
                        <div className="homepage-star-rating-container">
                            <p id="homepage-star-rating" className="homepage-star-rating-4"></p>
                            <p className="hot-new-rating-review">2 reviews</p>
                        </div>
                        <p className="hot-new-category">Japanese</p>
                        <p className="hot-new-city">Oakland, CA</p>
                        <p className="hot-new-opened"><GiSmallFire id="fire" />Opened {Math.floor(Math.random() * 4) + 2} weeks ago</p>
                    </Link>
                    <Link to="businesses/7" className="homepage-hot-businesses-link">
                        <img src={window.jonggaHot} alt="jongga-restaurant" className="hot-new-photo" />
                        <p className="hot-new-title">Jong Ga House</p>
                        <div className="homepage-star-rating-container">
                            <p id="homepage-star-rating" className="homepage-star-rating-4-5"></p>
                            <p className="hot-new-rating-review">2 reviews</p>
                        </div>
                        <p className="hot-new-category">Korean</p>
                        <p className="hot-new-city">Oakland, CA</p>
                        <p className="hot-new-opened"><GiSmallFire id="fire" />Opened {Math.floor(Math.random() * 4) + 2} weeks ago</p>
                    </Link>
                    <Link to="businesses/12" className="homepage-hot-businesses-link">
                        <img src={window.farmhouseHot} alt="farmhouse-restaurant" className="hot-new-photo" />
                        <p className="hot-new-title">Farmhouse Kitchen Thai Cuisine</p>
                        <div className="homepage-star-rating-container">
                            <p id="homepage-star-rating" className="homepage-star-rating-4-5"></p>
                            <p className="hot-new-rating-review">2 reviews</p>
                        </div>
                        <p className="hot-new-category">Thai</p>
                        <p className="hot-new-city">Oakland, CA</p>
                        <p className="hot-new-opened"><GiSmallFire id="fire" />Opened {Math.floor(Math.random() * 4) + 2} weeks ago</p>
                    </Link>
                </div>
            </div>

            <Footer />

        </div>
    )
};


export default Homepage;