import React from "react";
import { BsSearch } from "react-icons/bs"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchEnter = this.handleSearchEnter.bind(this);
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
        this.props.history.push(`/businesses/search/${searchQuery === '' ? 0 : searchQuery}`);
    }

    handleSearchEnter(e) {
        if (e.key === "Enter") {
            let searchQuery = this.state.query
            this.props.history.push(`/businesses/search/${searchQuery === '' ? 0 : searchQuery}`);
        }
    }

    render() {

        // console.log(this.props);
        // if (!this.props.businesses) return null;
        
        return(
            <div>

                <div className="searchbar-container">
                    <p className="searchbar-find">Find</p>
                        <input
                        className="searchbar-component-find"
                        type="text"
                        placeholder="burgers, Thai, seafood..."
                        onChange={this.update('query')}
                        onKeyPress={this.handleSearchEnter}
                        value={this.state.query}
                        />
                    <p className="searchbar-near">Near</p>
                        <input
                        className="searchbar-component-near"
                        readOnly placeholder="Oakland, CA"
                        />
                    <BsSearch onClick={this.handleSearch} className="searchbar-icon" />
                </div>

            </div>
        )
    }
};


export default SearchBar;