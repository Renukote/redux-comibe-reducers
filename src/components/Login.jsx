import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginError,
  loginLoading,
  loginSuccess,
} from "../Redux/login/actionCreators";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginLoading());

      const userDetails = {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      };

      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      res = await res.json();
      console.log("login res", res);

      dispatch(loginSuccess("abcdefgh"));
      navigate("/");
    } catch (e) {
      dispatch(loginError(e));
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        name="email"
        placeholder="Please enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Please enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Login" />
    </form>
  );
};
