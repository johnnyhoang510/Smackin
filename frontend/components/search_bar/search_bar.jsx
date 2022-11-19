import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import BusinessIndex from "../business/business_index_container";

const SearchBar = (props) => {
    const { fetchBusinesses } = props;
    const [businesses, setBusinesses] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchBusinesses()
            .then(res => setBusinesses(Object.values(res.businesses)))
            // .then(() => props.history.push('/businesses'))
    }, [])

    const getBusinesses = async () => {
        try {
            const response = await fetchBusinesses(query);
            setBusinesses(Object.values(response.businesses))
        } catch (error) {
            console.log(error)
        }
    }


    const handleSearch = (e) => {
        e.preventDefault();
        // let searchQuery = query
        // if (searchQuery === '') {
        //     searchQuery = `/businesses`
        // } else {
        //     searchQuery = `/businesses/search/${searchQuery}`
        // }
        // props.history.push(`/businesses/search?q=${query}`)
        getBusinesses();
    }

    const handleSearchEnter = (e) => {
        // if (e.key === "Enter") {
        //     let searchQuery = query;
        //     if (searchQuery === '') {
        //         searchQuery = `/businesses`
        //     } else {
        //         searchQuery = `/businesses/search/${searchQuery}`
        //     }
        //     props.history.push(`${searchQuery}`)
        // }
        if (e.key === "Enter") {
            // props.history.push(`/businesses/search?q=${query}`)
            getBusinesses()
        }
    }
        if (businesses) {

        return(
            <div>

                <div className="searchbar-container">
                    <p className="searchbar-find">Find</p>
                        <input
                        className="searchbar-component-find"
                        type="text"
                        placeholder="burgers, Thai, seafood..."
                        onChange={(e) => setQuery(e.currentTarget.value)}
                        onKeyPress={(e) => handleSearchEnter(e)}
                        value={query}
                        />
                    <p className="searchbar-near">Near</p>
                        <input
                        className="searchbar-component-near"
                        readOnly placeholder="Oakland, CA"
                        />
                    <BsSearch onClick={(e) => handleSearch(e)} className="searchbar-icon" />
                </div>

                <BusinessIndex query={query} businesses={businesses} />
            </div>
        )
        } else {
            return null;
        }
};


export default SearchBar;