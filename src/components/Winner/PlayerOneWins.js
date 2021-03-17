import { connect } from "react-redux";
import WinnerMessage from "./WinnerMessage";

const mapStateToProps = (state) => {
    return {
 
        player1Wins: state.player1Wins,
    }
}
export default connect(mapStateToProps)(WinnerMessage);