import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PostState from "./context/posts/PostState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <div className="App">
      <PostState>
        <BrowserRouter>
          <Navbar />
          <Alert message="This is test alert"/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </PostState>
    </div>
  );
}

export default App;
//npm react-router-dom 
