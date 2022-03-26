import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchBusinesses} from "../../actions/business_actions";


const mSTP = (state, ownProps) => {
    return {
        businesses: Object.values(state.entities.businesses)
    }
};


const mDTP = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses())
    }
};


export default connect(mSTP, mDTP)(SearchBar);