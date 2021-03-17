
import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state) => {
    return {
        hasStarted: state.hasStarted,
    }
}
export default connect(mapStateToProps)(App);
