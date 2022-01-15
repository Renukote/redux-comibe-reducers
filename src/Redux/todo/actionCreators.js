import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  REMOVE_TODO,
} from "./actionTypes";

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: title,
  };
};

export const removeTodo = (title) => {
  return {
    type: REMOVE_TODO,
    payload: title,
  };
};

// todo: -------------------------Add todo----------------------
export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};

export const addTodoSuccess = (res) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: res,
  };
};

export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  };
};

//todo: -------------------get todo-------------------------
export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};

export const getTodoSuccess = (res) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: res,
  };
};

export const getTodoError = (err) => {
  return {
    type: GET_TODO_ERROR,
    payload: err,
  };
};
