import { connect } from "react-redux";
import  ScoreCard  from "./ScoreCard";

const mapStateToProps = (state) => {
    return {
        server: state.server,
        score: state.player1,
    }
}
export default connect(mapStateToProps)(ScoreCard);