import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        let url;

        if (query === '') {
            url = "/businesses"
        } else {
            url = `/businesses/search/${query}`        
        }

        props.history.push(url)
        setQuery('')
    }

    const handleSearchEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            let url;

            if (query === '') {
                url = "/businesses"
            } else {
                url = `/businesses/search/${query}`
            }

            props.history.push(url)
            setQuery('')
        }
    }

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
        </div>
    )
};


export default SearchBar;