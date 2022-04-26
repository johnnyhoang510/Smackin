import React from "react";
import BusinessIndexItem from "../business/business_index_item";
import BusinessMap from "../map/business_map";
import SearchBarContainer from "./search_bar_container";
import { Link } from "react-router-dom";
import FilterContainer from "../filter/filter_container";


class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses(this.props.match.params.query);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.query !== this.props.match.params.query) {
            this.componentDidMount();
        }
    }

    render() {
        // console.log(this.props)
        if (!this.props.businesses) return null;
        
        return (
            <div>
                <h1>Search Index </h1>
            </div>
        )
    }
};


export default SearchIndex