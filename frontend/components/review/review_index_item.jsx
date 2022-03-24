import React from "react";
import { BiUserCircle } from 'react-icons/bi';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);

        const { review } = this.props;

        return(
            <div>
                <h1>Review Index item!</h1>
                <p className="review-item-user-icon"><BiUserCircle /></p>
                <p className="review-item-users-name">{review.user_first_name} {review.user_last_name}</p>
                <p>Rating: {review.rating}</p>
                <p>{review.created_at}</p>
                <p>{review.body}</p>
            </div>
        )
    }
};


export default ReviewIndexItem;