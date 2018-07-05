import { combineReducers } from "redux";
import { authReducer } from "drf-redux-auth";

export const allReducers = {
  // Obviously, you'll have more going on here.
  auth: authReducer
};

export default combineReducers(allReducers);
