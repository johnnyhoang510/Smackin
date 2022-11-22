import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
    const { query, handleSearch, handleSearchEnter, handleChange } = props;

    const handleQueryChange = (e) => {
        handleChange(e.currentTarget.value)
    }
    
    return(
        <div>
            <div className="searchbar-container">
                <p className="searchbar-find">Find</p>
                    <input
                        className="searchbar-component-find"
                        type="text"
                        placeholder="burgers, Thai, seafood..."
                        onChange={(e) => handleQueryChange(e)}
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