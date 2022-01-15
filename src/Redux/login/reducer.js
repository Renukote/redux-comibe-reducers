import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  token: loadData("token"),
};

if (initState.token) initState.isAuth = true;
else initState.isAuth = false;
console.log("token", initState.token);

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      saveData("token", payload);
      return { ...state, token: payload, loading: false, isAuth: true };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
