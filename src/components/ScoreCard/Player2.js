import { connect } from "react-redux";
import  ScoreCard  from "./ScoreCard";
import { player } from "../../data/actions";

const mapStateToProps = (state) => {
    return {
        server: state.server,
        score: state.player2,
    }
}

const mapDispatchToProps = (dispatch, {playerNum}) => {
    
    return {
        handleClick: () => dispatch(player(playerNum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);