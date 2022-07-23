import * as types from "./actionTypes" 


const initialState = {
    CUST:[],
    isLoading:false,
    isError:false,
}


const CustReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
     case types.GET_DATA_CUST_REQUEST:
      return {
        ...state,
        isLoading:true,
        isError:false
      }

      case types.GET_DATA_CUST_SUCCESS:
        return {
          ...state,
          CUST:payload,
          isLoading:false,
          isError:false
        }
        case types.GET_DATA_CUST_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true
      }
       
          
      
      default:
        return state;
    }
  };
  
  export default CustReducer;