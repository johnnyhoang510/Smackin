import React from "react";
import { withRouter } from "react-router";

class BusinessShowPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchBusiness(this.props.businessId)
    };

    
    componentDidUpdate(prevProps) {
        if (prevProps.businessId !== this.props.businessId) {
            this.props.fetchBusiness(this.props.businessId)
        }
    }
    

    render() {
        // console.log(this.props)
        const { business } = this.props;

        // on a re render, this will allow it to hit compDidMount
        if (business === undefined) return null;
        
        return(
            <div>
                {business.name}
                <h1>Welcome to the show page</h1>
            </div>
        )
    }
};


export default BusinessShowPage;