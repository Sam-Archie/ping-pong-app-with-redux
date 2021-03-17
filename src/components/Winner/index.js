import { connect } from "react-redux";
import WinnerMessage from "./WinnerMessage";

const mapStateToProps = (state) => {
    return {
        playerWins: state.playerWins,
    }
}
export default connect(mapStateToProps)(WinnerMessage);
