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
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
      </PostState>
    </div>
  );
}

export default App;
//npm react-router-dom concurrently