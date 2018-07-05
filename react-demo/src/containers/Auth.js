import { connect } from "react-redux";
import Auth from "../components/Auth";

import { loginUser, logoutUser } from "drf-redux-auth";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  loginUser: creds => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
