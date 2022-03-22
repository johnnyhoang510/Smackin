import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { currentUser, logout} = this.props;
        const display = currentUser ? (
            <div>
                <h2 className="welcome-user">Welcome, {currentUser.first_name}!</h2>
                <button className="logout-user" onClick={logout}>Log out</button>
            </div>
        ) : (
            <div>
                {/* <h1>Welcome to Smackin'</h1> */}
                <Link className="nav-login" to='/login'>Log In</Link>
                <Link className="nav-signup" to='/signup'>Sign Up</Link>
                <Link className="nav-businesses" to='/businesses'>Businesses</Link>
            </div>
        )

        return (
            <div>
                <h1>{display}</h1>
            </div>
        )
    }
};


export default NavBar;

