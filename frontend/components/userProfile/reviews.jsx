import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import { MdStar } from "react-icons/md";
import UserReviewIndexItem from "./userReviewIndexItem";
import { useState } from "react";
import { useEffect } from "react";

const Reviews = (props) => {
    const { currentUser, fetchBusiness, fetchReviewsByUser } = props;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviewsByUser(currentUser.id)
            .then(res => {
                const unsortedReviews = Object.values(res.reviews);
                // trying to sort on backend but this is a backup
                // const sortedReviews = unsortedReviews.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0))
                // setReviews(sortedReviews)

                setReviews(unsortedReviews)
            })
    }, [])

    const beautifyDate = (date) => {
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
        switch (numReviews) {
            case 5:
                return "num-reviews-5";
            case 4:
                return "num-reviews-4";
            case 3:
                return "num-reviews-3";
            case 2:
                return "num-reviews-2";
            case 1:
                return "num-reviews-1";
            case 0:
                return "num-reviews-0";
            default:
                break;
        }
    }

    if (reviews.length > 0 && currentUser) {

        return (
            <div id="user-profile-reviews">
                <NavBarContainer />
                <div className="user-profile-background">
                    <div className="user-profile-pic-container">
                        <img className="user-profile-pic" src={window.userLargeSquare} alt="" />
                    </div>
                    
                    <div className="user-profile-middle-container">
                        <h1 className="user-profile-title-name">{currentUser.first_name} {currentUser.last_name[0]}.</h1>
                        {/* may need to add a column for city, state */}
                        <p className="user-profile-city">From Oakland, CA</p>
                        <div className="user-profile-stars-num-reviews-container">
                            <MdStar className="user-profile-review-stars"/>
                            <span className="user-profile-num-reviews"><b className="bold-num-reviews">{currentUser.reviews.length}</b> Reviews</span>
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
                            <select name="sort-by-select" id="sort-by-select" className="sort-by-label">
                                <option value="alphabetical" defaultValue>Alphabetical</option>
                                <option value="rating">Rating</option>
                                <option value="date">Date</option>
                                <option value="useful">Useful</option>
                                <option value="funny">Funny</option>
                                <option value="cool">Cool</option>
                            </select>
                        </div>
                        {
                            reviews.map( (review, idx) => (
                                < UserReviewIndexItem review={review} key={idx} fetchBusiness={fetchBusiness} />
                                ))
                        }
                    </div>
                    <div className="user-reviews-right-container">
                        <h2 className="about-user">About {currentUser.first_name} {currentUser.last_name[0]}.</h2>
                        <p className="about-user-subtitles">Rating Distribution</p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-5" id={checkNumReviews(currentUser.num_reviews[5])}>5 stars</span><span className="num-reviews">{currentUser.num_reviews[5]}</span></p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-4" id={checkNumReviews(currentUser.num_reviews[4])}>4 stars</span><span className="num-reviews">{currentUser.num_reviews[4]}</span></p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-3" id={checkNumReviews(currentUser.num_reviews[3])}>3 stars</span><span className="num-reviews">{currentUser.num_reviews[3]}</span></p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-2" id={checkNumReviews(currentUser.num_reviews[2])}>2 stars</span><span className="num-reviews">{currentUser.num_reviews[2]}</span></p>
                        <p className="about-user-rating-distribution-row"><span className="num-stars-background-1" id={checkNumReviews(currentUser.num_reviews[1])}>1 stars</span><span className="num-reviews">{currentUser.num_reviews[1]}</span></p>
                        <p className="about-user-subtitles">Location</p>
                        <p className="about-user-content">Oakland, CA</p>
                        <p className="about-user-subtitles">Smackin' Since</p>
                        <p className="about-user-content">{beautifyDate(currentUser.created_at)}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
};

export default Reviews;