import React from "react";


class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(e) {
        e.preventDefault();
        let price = e.currentTarget.value;
        // console.log(price)
        this.props.history.push(`/businesses/search/${price}`)
    }

    render() {

        // console.log(this.props)

        return(
            <div>
                <h2 className="filters-title">Filters</h2>
                <div className="filters-container">
                    <button value="$" onClick={this.handleFilter} className="filter-button-1">$</button>
                    <button value="$$" onClick={this.handleFilter} className="filter-button-2">$$</button>
                    <button value="$$$" onClick={this.handleFilter} className="filter-button-3">$$$</button>
                    <button value="$$$$" onClick={this.handleFilter} className="filter-button-4">$$$$</button>
                </div>
            </div>
        )
    }
};


export default Filter;