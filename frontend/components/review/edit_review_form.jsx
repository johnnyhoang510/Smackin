import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";


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
        this.handleLogout = this.handleLogout.bind(this);
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

    handleLogout(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => this.props.history.push(`/businesses/${this.props.business.id}`))
    }

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
        
        // console.log(business);
        // console.log(review);

        let showErrors;
        if (errors.length) {
            showErrors = errors.map((err, idx) => (
                <li key={`err-${idx}`}>{err}</li>
            ))
        };
        
        return(
            <div>

                <header className="edit-form-header">
                    <Link to="/" className="edit-form-title-logo-wrapper">
                        <h1 className="edit-form-title">smackin'</h1>
                        <img className="edit-form-logo" src={window.logo} alt="logo" />
                    </Link>

                    <div className="edit-form-user-container">
                        <h2 className="edit-form-welcome-user">Welcome, {currentUser.first_name}!</h2>
                        <button onClick={this.handleLogout} className="edit-form-logout-button">Log Out</button>
                    </div>
                </header>

                <div className="edit-review-form-container">

                    <h1 className="edit-review-form-title">{business.name}</h1>

                    <form className="edit-review-form" onSubmit={this.handleSubmit}>
                        <div className="edit-review-form-rating-wrapper">

                            <div className="edit-form-stars-container">
                                <input id="rating-1" type="radio" value="1" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-1" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-2" type="radio" value="2" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-2" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-3" type="radio" value="3" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-3" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-4" type="radio" value="4" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-4" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-5" type="radio" value="5" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-5" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>
                            </div>

                            <p className="select-your-rating">Select your rating</p>
                        </div>

                        <textarea rows="25" cols="70" className="edit-review-form-textarea" onChange={this.update('body')} placeholder={review.body} required></textarea>
                        <br />
                        <button type="submit" className="edit-review-form-submit">Edit Review</button>
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