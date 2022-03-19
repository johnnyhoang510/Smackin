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
                <h2>Welcome!</h2>
                {/* <h2>Welcome, {currentUser.email}!</h2> */}
                <button onClick={logout}>Log out</button>
            </div>
        ) : (
            <div>
                <Link className="nav-login" to='/login'>Log In</Link>
                <Link className="nav-signup" to='/signup'>Sign Up</Link>
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

// export default ({ currentUser, logout }) => {

//     const display = currentUser ? (
//         <div>
//             {console.log(currentUser)}
//             <h2>Hello</h2>
//             <button onClick={logout}>LogOut</button>
//         </div>
//     ) : (
//         <div>
//             {console.log(currentUser)}
//             {console.log(logout)}
            
//             <Link to='/signup'>Sign Up</Link>
//             <Link to='/login'>Log In</Link>
//             <button onClick={logout}>LogOut</button>

//         </div>
//     );

//     return (
//         <div>
//             <h1>{display}</h1>
//         </div>
//     )

// }