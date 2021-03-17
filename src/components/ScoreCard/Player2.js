import { connect } from "react-redux";
import  ScoreCard  from "./ScoreCard";
import { playerTwo } from "../../data/actions";

const mapStateToProps = (state) => {
    return {
        server: state.server,
        score: state.player2,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        handleClick: () => dispatch(playerTwo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);