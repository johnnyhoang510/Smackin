import React from "react";


class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <h1>Review Index item!</h1>
            </div>
        )
    }
};


export default ReviewIndexItem;