import {
  applyMiddleware,
  legacy_createStore,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
//import { AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import DataReducer from "./Integration/reducer";

import CustReducer from "./Customers/reducer";


const rootReducer = combineReducers({  AuthReducer, DataReducer, CustReducer  });
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
 const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export {store}
