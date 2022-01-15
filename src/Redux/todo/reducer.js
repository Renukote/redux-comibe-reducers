import { loadData, saveData } from "../../utils/localStorage";
import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  todos: loadData("todos") || [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      const updatedData = [...state.todos, payload];
      saveData("todos", updatedData);
      return {
        ...state,
        todos: updatedData,
        loading: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
