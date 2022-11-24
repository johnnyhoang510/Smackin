import React from "react";
import { Link } from "react-router-dom";
import { displayUserOnBusiness } from "../../util/display_current_user";
import SearchBarContainer from "../search_bar/search_bar_container";

const NavBar = (props) => {
    const { currentUser, logout} = props;

    return (
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
    )
};


export default NavBar;

