import React from "react";


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
            <div>
                <input
                className="searchbar-component"
                    type="text"
                    placeholder="slightly working..."
                    onChange={this.update('query')}
                    value={this.state.query}
                />
                <button onClick={this.handleSearch} className="searchbar-button">Search</button>
            </div>
        )
    }
};


export default SearchBar;