import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

class CreateReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            body: '',
            user_id: this.props.user_id,
            business_id: this.props.match.params.businessId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    componentWillUnmount() {
        this.props.clearReviewErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state, this.props.business.id)
            .then(() => this.props.history.push(`/businesses/${this.props.business.id}`))
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => this.props.history.push(`/businesses/${this.props.business.id}`))
    }

    update(field) {
        if (field === 'rating') {
            return e => this.setState({ [field]: parseInt(e.currentTarget.value) })
        } else {
            return e => this.setState({ [field]: e.currentTarget.value })
        }
    }

    checkedText() {  
        switch (this.state.rating) {
            case 0:
                return "Select your rating"
            case 1:
                return "Not good"
            case 2:
                return "Could've been better"
            case 3:
                return "OK"
            case 4:
                return "Good"
            case 5:
                return "Great"
            default:
                break;
        }
    }

    render() {

        const { business, errors, currentUser, clearReviewErrors } = this.props;
        // console.log(errors)
        // console.log(this.state);
        // console.log(this.props);
        if (!business) return null;

        let showErrors;
        if (errors.length || this.state.rating === 0) {
            showErrors = errors.responseJSON
        } else {
            showErrors = null;
        };

        return(

        <div>

            <header className="create-form-header">
                <Link to="/" className="create-form-title-logo-wrapper">
                    <h1 className="create-form-title">smackin'</h1>
                    <img className="create-form-logo" src={window.logo} alt="logo" />
                </Link>

                <div className="create-form-user-container">
                    <h2 className="create-form-welcome-user">Welcome, {currentUser.first_name}!</h2>
                    <button onClick={this.handleLogout} onClick={clearReviewErrors} className="create-form-logout-button">Log Out</button>
                </div>
            </header>

            <div className="create-review-form-container">

                <h1 className="create-review-form-title">{business.name}</h1>

                <form className="create-review-form" onSubmit={this.handleSubmit}>
                    <div className="create-review-form-rating-wrapper">

                        <div className="create-form-stars-container">
                            <input id="rating-1" type="radio"  value="5" onChange={this.update('rating')} name="rating"/>
                            <label htmlFor="rating-1" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                            <input id="rating-2" type="radio"  value="4" onChange={this.update('rating')} name="rating"/>
                            <label htmlFor="rating-2" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                            <input id="rating-3" type="radio"  value="3" onChange={this.update('rating')} name="rating"/>
                            <label htmlFor="rating-3" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                            <input id="rating-4" type="radio"  value="2" onChange={this.update('rating')} name="rating"/>
                            <label htmlFor="rating-4" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                            <input id="rating-5" type="radio"  value="1" onChange={this.update('rating')} name="rating"/>
                            <label htmlFor="rating-5" id="create-review-form-rating"><BsStarFill className="review-star" /></label>
                        </div>
                        
                        <p className="select-your-rating">{this.checkedText()}</p>
                    </div>

                    <textarea rows="25" cols="70" className="create-review-form-textarea" onChange={this.update('body')} placeholder="Doesn't look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow... there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). Not much else to say besides go see for yourself! You won't be disappointed." required></textarea>
                    <div className="create-review-form-errors">
                            <p className="create-review-show-errors">{showErrors}</p>
                    </div>
                    <br />
                    <button type="submit" className="create-review-form-submit">Post Review</button>
                </form>

            </div>

        </div>

        )
    }
};


export default CreateReviewForm;