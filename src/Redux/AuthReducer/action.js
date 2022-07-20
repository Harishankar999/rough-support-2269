import * as types from "./actionTypes";
import axios from "axios";

const register = (payload) => (dispatch) => {
  return axios
    .post("https://reqres.in/api/register", payload)
    .then((res) =>
      dispatch({ type: types.REGD_USER_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.REGD_USER_FAILURE, payload: err }));
};

export { register };

// https://reqres.in/api/register
