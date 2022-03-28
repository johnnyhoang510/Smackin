import React from "react";


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    };

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    update(e) {
        e.preventDefault();
        return e => this.setState({ query: e.currentTarget.value })
    }

    render() {

        if (!this.props.businesses) return null;
        
        return(
            <div>
                <input
                className="searchbar-component"
                    type="search"
                    placeholder="burgers, tacos, American"
                    onChange={this.update}
                    value={this.state.query}
                />
            </div>
        )
    }
};


export default SearchBar;