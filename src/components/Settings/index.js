import { connect } from "react-redux";
import { start } from "../../data/actions";
import Settings from "./Settings";

const mapStateToProps = state => {
    
    return {
        hasStarted: state.hasStarted,
        p1Name : state.playerOneName,
        p2Name : state.playerTwoName,
        winScore : state.winningScore,
        serveNum : state.servingNumber,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       hasStarted: (data) => dispatch(start(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);