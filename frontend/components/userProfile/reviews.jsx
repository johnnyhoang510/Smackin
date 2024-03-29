import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import { MdStar } from "react-icons/md";
import UserReviewIndexItem from "./userReviewIndexItem";
import { useState } from "react";
import { useEffect } from "react";

const Reviews = (props) => {
    const { currentUser, fetchCurrentUser, fetchReviewsByUser } = props;
    const [reviews, setReviews] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [user, setUser] = useState(""); 

    useEffect(() => {
        fetchCurrentUser(currentUser.id)
            .then((res) => setUser(res.currentUser))
            .then(() => fetchReviews())
    }, [])

    useEffect(() => {
        fetchReviews();
    }, [sortBy])

    const fetchReviews = () => {
        fetchReviewsByUser(currentUser.id, sortBy)
            .then(res => {
                setReviews(res.reviews)
            })
    }

    const convertDate = (date) => {
        if (!date) return null;

        const monthStrings = {
            "1" : "January",
            "2" : "February",
            "3" : "March",
            "4" : "April",
            "5" : "May",
            "6" : "June",
            "7" : "July",
            "8" : "August",
            "9" : "September",
            "10" : "October",
            "11" : "November",
            "12" : "December"
        };
        
        const dateSplit = date.split("T")[0];
        const [year, month, day] = dateSplit.split("-")

        return `${monthStrings[month]} ${year}`
    }

    const checkNumReviews = (numReviews) => {
        // switch (numReviews) {
        //     case (numReviews >= 5):
        //         return "num-reviews-5";
        //     case 4:
        //         return "num-reviews-4";
        //     case 3:
        //         return "num-reviews-3";
        //     case 2:
        //         return "num-reviews-2";
        //     case 1:
        //         return "num-reviews-1";
        //     case 0:
        //         return "num-reviews-0";
        //     default:
        //         break;
        // }

        if (numReviews >= 5) {
            return "num-reviews-5";
        } else if (numReviews === 4) {
            return "num-reviews-4";
        } else if (numReviews === 3) {
            return "num-reviews-3";
        } else if (numReviews === 2) {
            return "num-reviews-2";
        } else if (numReviews === 1) {
            return "num-reviews-1";
        } else if (numReviews === 0) {
            return "num-reviews-0";
        }
    }

    if (reviews && user !== "") {

        return (
            <div id="user-profile-reviews">
                <NavBarContainer />
                <div className="user-profile-background">
                    <div className="user-profile-pic-container">
                        <img className="user-profile-pic" src={window.userLargeSquare} alt="" />
                    </div>
                    
                    <div className="user-profile-middle-container">
                        <h1 className="user-profile-title-name">{user.first_name} {user.last_name[0]}.</h1>
                        {/* may need to add a column for city, state */}
                        <p className="user-profile-city">From Oakland, CA</p>
                        <div className="user-profile-stars-num-reviews-container">
                            <MdStar className="user-profile-review-stars"/>
                            <span className="user-profile-num-reviews"><b className="bold-num-reviews">{reviews.length}</b> Reviews</span>
                        </div>
                    </div>

                    {/* future to do? */}
                    {/* <div className="user-profile-right-container">
                        <p className="user-profile-blue-text">Add Profile Photos</p>
                        <p className="user-profile-blue-text">Update Your Profile</p>
                        <p className="user-profile-blue-text">Find Friends</p>
                    </div> */}

                </div>

                <div className="user-profile-reviews-container">
                    <div className="user-reviews-middle-container">
                        <h2 className="reviews-title">Reviews</h2>
                        <div className="user-profile-sort-container">
                            <label htmlFor="sort-by-select" className="sort-by-subtitle">Sort by:</label>
                            <select name="sort-by-select" id="sort-by-select" className="sort-by-label" onChange={(e) => setSortBy(e.target.value)}>
                                <option value="" defaultValue>Alphabetical</option>
                                <option value="rating">Rating</option>
                                <option value="created_at">Date</option>
                                <option value="useful">Useful</option>
                                <option value="funny">Funny</option>
                                <option value="cool">Cool</option>
                            </select>
                        </div>
                        {
                            reviews.map( (review, idx) => (
                                < UserReviewIndexItem review={review} key={idx} business={review.business} />
                                ))
                        }
                    </div>
                    <div className="user-reviews-right-container">
                        <h2 className="about-user">About {user.first_name} {user.last_name[0]}.</h2>
                        <p className="about-user-subtitles">Rating Distribution</p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-5" id={checkNumReviews(user.num_reviews[5])}>5 stars</span><span className="num-reviews">{user.num_reviews[5]}</span></p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-4" id={checkNumReviews(user.num_reviews[4])}>4 stars</span><span className="num-reviews">{user.num_reviews[4]}</span></p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-3" id={checkNumReviews(user.num_reviews[3])}>3 stars</span><span className="num-reviews">{user.num_reviews[3]}</span></p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-2" id={checkNumReviews(user.num_reviews[2])}>2 stars</span><span className="num-reviews">{user.num_reviews[2]}</span></p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-1" id={checkNumReviews(user.num_reviews[1])}>1 stars</span><span className="num-reviews">{user.num_reviews[1]}</span></p>
                        <p className="about-user-subtitles">Location</p>
                        <p className="about-user-content">Oakland, CA</p>
                        <p className="about-user-subtitles">Smackin' Since</p>
                        <p className="about-user-content">{convertDate(user.created_at)}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
};

export default Reviews;