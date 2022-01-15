import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../Redux/todo/actionCreators";

export const TodoComponent = () => {
  const [text, setText] = useState("");

  const { isAuth } = useSelector((state) => ({ isAuth: state.auth.isAuth }));
  console.log("isAuth", isAuth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loading, error, todos } = useSelector((state) => ({
    loading: state.todo.loading,
    error: state.todo.error,
    todos: state.todo.todos,
  }));

  useEffect(() => {
    if (!isAuth) navigate("/login");
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      dispatch(getTodoLoading());
      let res = await fetch("http://localhost:3001/todos");
      res = await res.json();

      dispatch(getTodoSuccess(res));
    } catch (e) {
      dispatch(getTodoError(e));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoLoading());

    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({ status: false, title: text }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((res) => dispatch(addTodoSuccess(res)))
      .catch((e) => dispatch(addTodoError(e)));
  };

  return loading ? (
    <h1>...Loading</h1>
  ) : error ? (
    <h1>Something went wrong, Please try again </h1>
  ) : (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter a new todo"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <input type="submit" value="Add Todo" />
        </form>

        {todos.map((e) => {
          return (
            <div key={e.id}>
              {e.title} {e.status ? "Done" : "Not Done "}
            </div>
          );
        })}
      </div>
    </>
  );
};
