import { connect } from "react-redux";
import { start } from "../../data/actions";
import Settings from "./Settings";

const mapStateToProps = state => {
    
    return {
        hasStarted: state.hasStarted,
        playerOneName: state.playerOneName,
        playerTwoName: state.playerTwoName,
        winningScore: state.winningScore,
        servingNumber: state.servingNumber,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       hasStarted: (data) => dispatch(start(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);