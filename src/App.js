import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PostState from "./context/posts/PostState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AlertState from "./context/alerts/AlertState";
import UserPosts from "./components/PostComponents/UserPosts";

function App() {
  return (
    <div className="App">
      <AlertState>
        <PostState>
          <BrowserRouter>
            <Navbar />
            <Alert message="This is test alert" />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/userposts" element={ <UserPosts/> }></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </PostState>
      </AlertState>
    </div>
  );
}

export default App;
//npm react-router-dom
