import axios from "axios"
import * as types from "./actionTypes"
import meetupData from "../../Data/IntegrationData"


 


const getData = (params) => (dispatch) => {
    dispatch({type:types.GET_DATA_REQUEST})
    axios.get("http://localhost:8080/meetupData", params).then((r) => dispatch({type:types.GET_DATA_SUCCESS, payload:r.data})).catch(e => dispatch({type:types.GET_DATA_FAILURE}))
}

export {getData}