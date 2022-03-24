import React from "react";
import { Link } from "react-router-dom";

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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state, this.props.business.id)
            .then(() => this.props.history.push(`/businesses/${this.props.business.id}`))
        // redirect the user back to show page
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {

        const { business, errors } = this.props;
        // console.log(errors)
        // console.log(this.state);
        // console.log(this.props);
        if (!business) return null;

        let showErrors;
        if (errors.length) {
            showErrors = errors.map( (err, idx) => (
                <li key={idx}>{err}</li>
            ))
        };

        return(

        <div>

                {/* <header className="session-form-header">
                    <Link className="session-form-header-link" to="/">smackin'</Link>
                    <Link className="session-form-header-logo" to="/">(Logo goes here)</Link>
                </header> */}

            <div className="create-review-form-container">

                <h1 className="create-review-form-title">{business.name}</h1>

                <form className="create-review-form" onSubmit={this.handleSubmit}>
                    <div className="create-review-form-rating-wrapper">
                        <p className="select-your-rating">Select your rating</p>

                        <label htmlFor="rating-1" className="create-review-form-rating-1">1</label>
                        <input id="rating-1" type="radio"  value="1" onChange={this.update('rating')} name="rating"/>

                        <label htmlFor="rating-2" className="create-review-form-rating-2">2</label>
                        <input id="rating-2" type="radio"  value="2" onChange={this.update('rating')} name="rating"/>

                        <label htmlFor="rating-3" className="create-review-form-rating-3">3</label>
                        <input id="rating-3" type="radio"  value="3" onChange={this.update('rating')} name="rating"/>

                        <label htmlFor="rating-4" className="create-review-form-rating-4">4</label>
                        <input id="rating-4" type="radio"  value="4" onChange={this.update('rating')} name="rating"/>

                        <label htmlFor="rating-5" className="create-review-form-rating-5">5</label>
                        <input id="rating-5" type="radio"  value="5" onChange={this.update('rating')} name="rating"/>
                    </div>

                    <textarea rows="25" cols="70" className="create-review-form-textarea" onChange={this.update('body')} placeholder="it was trash" required></textarea>
                    <br />
                    <button type="submit" className="create-review-form-submit">Post Review</button>
                </form>

                <div className="create-review-form-errors">
                    <ul className="create-review-show-errors">
                        {showErrors}
                    </ul>
                </div>
            </div>

        </div>

        )
    }
};


export default CreateReviewForm;