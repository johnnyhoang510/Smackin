import React from "react";
import { BsSearch } from "react-icons/bs"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
    };

    // componentDidMount() {
    //     this.props.fetchBusinesses();
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSearch(e) {
        e.preventDefault();
        let searchQuery = this.state.query
        this.props.history.push(`/businesses?search=${searchQuery === '' ? 0 : searchQuery}`);
        // window.location.reload(); this brings up an error for key index in the console
    }

    render() {

        // console.log(this.props);
        // if (!this.props.businesses) return null;
        
        return(
            <div className="searchbar-container">
                <input
                className="searchbar-component"
                    type="text"
                    placeholder="slightly working..."
                    onChange={this.update('query')}
                    value={this.state.query}
                />
                {/* <button onClick={this.handleSearch} className="searchbar-button">Search</button> */}
                <BsSearch onClick={this.handleSearch} className="searchbar-icon" />
            </div>
        )
    }
};


export default SearchBar;