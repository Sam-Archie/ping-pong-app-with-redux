import { connect } from "react-redux";
import WinnerMessage from "./WinnerMessage";

const mapStateToProps = (state) => {
    return {
        player2Wins: state.player2Wins,
    }
}

export default connect(mapStateToProps)(WinnerMessage);