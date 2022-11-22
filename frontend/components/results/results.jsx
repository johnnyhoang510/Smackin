import React from "react";
import SearchBarContainer from "../search_bar/search_bar_container";
import BusinessIndexContainer from "../business/business_index_container";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Results = (props) => {
    const { fetchBusinesses, logout, currentUser } = props;
    const [businesses, setBusinesses] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchBusinesses()
            .then(res => setBusinesses(Object.values(res.businesses)))
    }, [])

    // const getBusinesses = async () => {
    //     try {
    //         const response = await fetchBusinesses(query);
    //         setBusinesses(Object.values(response.businesses))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleSearch = (e) => {
        e.preventDefault();
        let url;
        if (query === '') {
            url = `/businesses`;
            const allBusinesses = fetchBusinesses();
            setBusinesses(allBusinesses)
        } else {
            // url = `/search?q=${query}`;
            url = `/businesses/search/${query}`
            const filteredBusinesses = fetchBusinesses(query);
            setBusinesses(filteredBusinesses)
        }
        props.history.push(url)
        // getBusinesses();
    }
    console.log(props.history)

    const handleSearchEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            let url;
            if (query === '') {
                url = `/businesses`;
                const allBusinesses = fetchBusinesses();
                setBusinesses(allBusinesses)
            } else {
                // url = `/businesses/search?q=${query}`;
                url = `/businesses/search/${query}`
                
                const filteredBusinesses = fetchBusinesses(query);
                setBusinesses(filteredBusinesses)
            }
            props.history.push(url)
            // getBusinesses();
        }
    }


    const handleChange = (newValue) => {
        setQuery(newValue)
    }

    const checkLoggedIn = currentUser ? (
        <div className="biz-index-check-loggedin-container">
            {/* <Link to="/" className="biz-index-your-reviews">Your Reviews</Link> */}
            <h2 className="biz-index-welcome-user">Welcome, {currentUser.first_name}!</h2>
            <button className="biz-index-logout-user" onClick={logout}>Log out</button>
        </div>
    ) : (
        <div className="biz-index-login-signup-buttons">
            <Link className="biz-index-login-button" to='/login'>Log In</Link>
            <Link className="biz-index-signup-button" to='/signup'>Sign Up</Link>
        </div>
    )

    if (businesses) {
        return (
            <div>
                <div className="biz-index-container">

                    <div className="biz-index-navbar">
                        <Link to="/" className="biz-index-back-to-homepage">
                            <h3 className="biz-index-homepage-text">smackin'</h3>
                            <img className="biz-index-logo" src={window.logo} alt="logo" />
                        </Link>

                        <div className="biz-index-searchbar">
                            <SearchBarContainer 
                                handleChange={handleChange} 
                                query={query} 
                                handleSearch={handleSearch} 
                                handleSearchEnter={handleSearchEnter}/> 
                        </div>

                        {checkLoggedIn}
                    </div>
                    <BusinessIndexContainer query={query} businesses={businesses} />
                </div>
                <Footer />
            </div>
        )
    } else {
        return null;
    }
};

export default Results;