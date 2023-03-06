import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import List from "./Components/List";
import Contact from "./Components/Contact";
import { useState } from "react";
import { BrowserRouter as Router,HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [backColor, setBackColor] = useState({
    backgroundColor: "#fff7ca",
  });
  const [mode, setMode] = useState("light");
  const toggleStyle = () => {
    if (mode == "light") {
      document.body.style.backgroundColor = "#01172b";
      setMode("dark");
      setBackColor({
        backgroundColor: "rgb(239, 239, 239)",
      });
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      setBackColor({
        backgroundColor: "#fff7ca",
      });
    }
  };
  return (
    <>
      <HashRouter>
        <Navbar header="Task List.." />
        {/* <header>My First React App...</header> */}
        <button id="mode" style={backColor} onClick={toggleStyle}>
          💡
        </button>
        <Routes>
          <Route path="/" element={<List mode={mode} hold="Write your task here..." />}/>
          <Route path="/contact" element={<Contact mode={mode} />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
