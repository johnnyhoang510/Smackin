import React from "react";
import { Link } from "react-router-dom";

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
                {/* <h1>Welcome to Smackin'</h1> */}
                <Link className="homepage-login-button" to='/login'>Log In</Link>
                <Link className="homepage-signup-button" to='/signup'>Sign Up</Link>
            </div>
        )

        // console.log(bg)
        return(
            <div className="homepage-container">
                <div className="homepage-bg-photo-wrapper">
                    <img className="homepage-bg-photo" src={window.homePhotoURL} alt="background-photo" />
                </div>

                <div className="homepage-biz-wrapper">
                    <Link to="/businesses" className="homepage-biz-link">Browse Businesses</Link>
                </div>

                <div className="homepage-check-login">
                    {display}
                </div>
            </div>
        )
    }
};


export default Homepage;