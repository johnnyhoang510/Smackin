import { connect } from "react-redux";
import Filter from "./filter";
import { withRouter } from "react-router";



export default withRouter(
    connect(
        null,
        null)(
        Filter)
);