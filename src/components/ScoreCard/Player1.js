import { connect } from "react-redux";
import  ScoreCard  from "./ScoreCard";
import { playerOne } from "../../data/actions";

const mapStateToProps = (state) => {
    return {
        server: state.server,
        score: state.player1,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        handleClick: () => dispatch(playerOne())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);