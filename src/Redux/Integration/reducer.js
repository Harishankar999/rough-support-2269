import * as types from "./actionTypes" 


const initialState = {
    datas:[],
    isLoading:false,
    isError:false,
}


const DataReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
     case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading:true,
        isError:false
      }

      case types.GET_DATA_SUCCESS:
        return {
          ...state,
          datas:payload,
          isLoading:false,
          isError:false
        }
        case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true
      }
       
          
      
      default:
        return state;
    }
  };
  
  export default DataReducer;