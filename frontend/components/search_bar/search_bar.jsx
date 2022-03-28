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
        let desc = this.state.findDesc;
        let loc = this.state.findLoc;
        this.props.history.push(`/businesses?find=${desc === '' ? 0 : desc}`)
    }

    render() {

        // console.log(this.props);
        // if (!this.props.businesses) return null;
        
        return(
            <div>
                <input
                className="searchbar-component"
                    type="text"
                    placeholder="this dont work yet :("
                    onChange={this.update('findDesc')}
                    value={this.state.findDesc}
                />
                <button onClick={this.handleSearch} className="searchbar-button">Search</button>
            </div>
        )
    }
};


export default SearchBar;