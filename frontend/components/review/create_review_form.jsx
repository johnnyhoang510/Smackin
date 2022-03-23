import React from "react";


class CreateReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            body: '',
            user_id: this.props.user_id,
            // business_id is a string? is that normal
            business_id: this.props.match.params.businessId
        }
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render() {

        const { business } = this.props;
        // console.log(this.state);
        // console.log(this.props);
        if (!business) return null;

        return(
            <div className="create-review-form-container">
                <h1 className="create-review-form-title">{business.name}</h1>

                <form action="">

                    
                </form>
            </div>
        )
    }
};


export default CreateReviewForm;