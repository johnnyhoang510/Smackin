import React from "react";

const Filter = (props) => {

    const handleFilter = (e) => {
        e.preventDefault();
        const dollarSigns = e.currentTarget.value;
        props.history.push(`/businesses/search/${dollarSigns}`)
    }

    return(
        <div>
            <h2 className="filters-title">Filters</h2>
            <div className="filters-container">
                <button value="$" onClick={(e) => handleFilter(e)} className="filter-button-1">$</button>
                <button value="$$" onClick={(e) => handleFilter(e)} className="filter-button-2">$$</button>
                <button value="$$$" onClick={(e) => handleFilter(e)} className="filter-button-3">$$$</button>
                <button value="$$$$" onClick={(e) => handleFilter(e)} className="filter-button-4">$$$$</button>
            </div>
        </div>
    )
};


export default Filter;