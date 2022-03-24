import React from "react";


class EditReviewForm extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReview(this.props.businessId, this.props.reviewId)
    };


    render() {
        // console.log(this.props);
        // const { review, }
        return(
            <div>
                <h1>Edit Review</h1>
            </div>
        )
    }
};


export default EditReviewForm