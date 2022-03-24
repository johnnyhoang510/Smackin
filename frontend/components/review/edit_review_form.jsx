import React from "react";


class EditReviewForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: '',
            user_id: '',
            business_id: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        this.props.fetchReview(this.props.match.params.businessId, this.props.match.params.reviewId);
        this.props.fetchBusiness(this.props.match.params.businessId);
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState( this.props.review )
        }
        // console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state, this.props.businessId)
            .then(() => this.props.history.push(`/businesses/${this.props.business.id}`))
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };


    render() {
        // console.log(this.props);
        if (!this.props.review) return null;
        if (!this.props.business) return null;
        // if (!this.props.businessId) return null;
        // if (!this.props.reviewId) return null;
        // if (!this.props.currentUser) return null;
        
        // console.log(this.props.review);
        // console.log(this.props.business);
        // console.log(this.state);
        const { review, business, businessId, reviewId, currentUser, errors } = this.props;
        
        console.log(business);
        console.log(review);

        let showErrors;
        if (errors.length) {
            showErrors = errors.map((err, idx) => (
                <li key={idx}>{err}</li>
            ))
        };
        
        return(
            <div>
                <div className="edit-review-form-container">

                    <h1 className="edit-review-form-title">{business.name}</h1>

                    <form className="edit-review-form" onSubmit={this.handleSubmit}>
                        <div className="edit-review-form-rating-wrapper">
                            <p className="select-your-rating">Select your rating</p>

                            <label htmlFor="rating-1" className="edit-review-form-rating-1">1</label>
                            <input id="rating-1" type="radio" value="1" onChange={this.update('rating')} name="rating" />

                            <label htmlFor="rating-2" className="edit-review-form-rating-2">2</label>
                            <input id="rating-2" type="radio" value="2" onChange={this.update('rating')} name="rating" />

                            <label htmlFor="rating-3" className="edit-review-form-rating-3">3</label>
                            <input id="rating-3" type="radio" value="3" onChange={this.update('rating')} name="rating" />

                            <label htmlFor="rating-4" className="edit-review-form-rating-4">4</label>
                            <input id="rating-4" type="radio" value="4" onChange={this.update('rating')} name="rating" />

                            <label htmlFor="rating-5" className="edit-review-form-rating-5">5</label>
                            <input id="rating-5" type="radio" value="5" onChange={this.update('rating')} name="rating" />
                        </div>

                        <textarea rows="25" cols="70" className="edit-review-form-textarea" onChange={this.update('body')} placeholder={review.body} required></textarea>
                        <br />
                        <button type="submit" className="edit-review-form-submit">Update Review</button>
                    </form>

                    <div className="edit-review-form-errors">
                        <ul className="edit-review-show-errors">
                            {showErrors}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};


export default EditReviewForm