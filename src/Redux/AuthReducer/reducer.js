import * as types from "./actionTypes";

const initialState = {
  isRegd: false,
  isLoading: false,
  isError: false,
  token:null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGD_USER_SUCCESS:
        return{
            isRegd:true,
            isLoading:false,
            isError:false,
            token:payload
        }
        case types.REGD_USER_FAILURE:
        return{
            isRegd:false,
            isLoading:false,
            isError:true,
            token:payload
        }
    default:
      return state;
  }
};

export { reducer };
