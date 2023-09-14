import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home";
import Detail from "./components/Detail";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;