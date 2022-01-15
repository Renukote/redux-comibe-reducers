import { combineReducers, createStore } from "redux";
import { reducer as TodoReducer } from "./todo/reducer";
import { reducer as AuthReducer } from "./login/reducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
  auth: AuthReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
