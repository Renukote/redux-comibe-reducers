import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TodoComponent } from "./components/Todo";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoComponent />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
