import React from "react";
import { withRouter } from "react-router";

class BusinessShowPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        console.log("from constructor")
    }
    
    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
        console.log("from componentdidmount")
        console.log(this.props);
    };
    

    render() {

        const { business } = this.props;
        console.log(this.props);
        console.log("from render")
        return(
            <div>
                <h1>Welcome to the show page</h1>
            </div>
        )
    }
};


export default BusinessShowPage;