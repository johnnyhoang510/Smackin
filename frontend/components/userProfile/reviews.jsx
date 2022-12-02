import React from "react";
import NavBarContainer from "../navbar/navbar_container";

const Reviews = (props) => {
    const { currentUser, logout } = props;

    console.log(currentUser)
    if (currentUser) {
        return (
            <div id="user-profile-reviews">
                <NavBarContainer />
                <div className="user-profile-background">
                    <div className="user-profile-pic-container">
                        <img className="user-profile-pic" src={window.userLargeSquare} alt="" />
                    </div>

                    <div className="user-profile-middle-container">
                        <h1 className="user-profile-title-name">{currentUser.first_name} {currentUser.last_name}</h1>
                        {/* may need to add a column for city, state */}
                        <p>From Oakland, CA</p>
                        <p>{currentUser.reviews.length} Reviews</p>
                    </div>

                    <div className="user-profile-right-container">
                        <p className="user-profile-blue-text">Add Profile Photos</p>
                        <p className="user-profile-blue-text">Update Your Profile</p>
                        <p className="user-profile-blue-text">Find Friends</p>
                    </div>

                </div>
            </div>
        )
    } else {
        return null;
    }
};

export default Reviews;