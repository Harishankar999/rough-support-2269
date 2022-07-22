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

const login = (pay) => (dispatch) => {
  return axios
    .post("https://reqres.in/api/login", pay)
    .then((res) =>
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.LOGIN_USER_FAILURE, payload: err }));
};

export { register, login };

// https://reqres.in/api/register
