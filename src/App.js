import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PostState from "./context/posts/PostState";

function App() {
  return (
    <div className="App">
      <PostState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </PostState>
    </div>
  );
}

export default App;
//npm react-router-dom concurrently
