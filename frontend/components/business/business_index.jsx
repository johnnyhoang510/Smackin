import React from "react";
import BusinessIndexItem from "./business_index_item";


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        // console.log(this.props)
        const { businesses } = this.props;
        return(
            <div>
                <h1>Hi from business index</h1>
                <br />
                <h2>SEARCH BAR COMPONENT AT THE TOP OF PAGE</h2>
                <h2>NOTE: CLICKING ON CONTAINER SHOULD LINK TO SHOW PAGE</h2>

                <ul>
                    {businesses.map(business => (
                        <BusinessIndexItem key={business.id} business={business} />
                    ))}
                </ul>
                <br />
                <h3>MAP COMPONENT TO THE RIGHT</h3>
            </div>
        )
    }
};


export default BusinessIndex;