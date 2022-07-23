import axios from "axios"
import * as types from "./actionTypes"
 


 


const getData_cust = (params) => (dispatch) => {
    dispatch({type:types.GET_DATA_CUST_REQUEST})
    axios.get("http://localhost:8080/Customers", params).then((r) => dispatch({type:types.GET_DATA_CUST_SUCCESS, payload:r.data})).catch(e => dispatch({type:types.GET_DATA_CUST_FAILURE}))
}

export {getData_cust}