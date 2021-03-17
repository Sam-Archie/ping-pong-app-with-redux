import { connect } from "react-redux";
import { start } from "../../data/actions";
import Settings from "./Settings";

const mapStateToProps = state => {
    
    return {
        hasStarted: state.hasStarted,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       hasStarted: () => dispatch(start())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);