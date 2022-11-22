import React from "react";
import { Link } from "react-router-dom";

export const displayUserHomeAndIndex = (user, callback) => {
    let userInfo;

    user ? userInfo = 
        (
            <div className="biz-index-check-loggedin-container">
                <h2 className="biz-index-welcome-user">Welcome, {user.first_name}!</h2>
                <button className="biz-index-logout-user" onClick={callback}>Log out</button>
            </div>
        ) : userInfo = 
        (
            <div className="biz-index-login-signup-buttons">
                <Link className="biz-index-login-button" to='/login'>Log In</Link>
                <Link className="biz-index-signup-button" to='/signup'>Sign Up</Link>
            </div>
        )

    return userInfo
};

export const displayUserReviewForm = (user, callback) => {
    const header = 
        <header className="create-form-header">
            <Link to="/" className="create-form-title-logo-wrapper">
                <h1 className="create-form-title">smackin'</h1>
                <img className="create-form-logo" src={window.logo} alt="logo" />
            </Link>

            <div className="create-form-user-container">
                <h2 className="create-form-welcome-user">Welcome, {user.first_name}!</h2>
                <button onClick={callback} className="create-form-logout-button">Log Out</button>
            </div>
        </header>

    return header;
};