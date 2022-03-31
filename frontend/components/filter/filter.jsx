import React from "react";


class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            price: ''
        }

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(e) {
        e.preventDefault();
        let button = e.currentTarget.value;
        // console.log(button)
        this.props.history.push(`/businesses?filter=${button}`)
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