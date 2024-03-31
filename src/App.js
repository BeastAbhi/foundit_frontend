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
import UserState from "./context/user/UserState";
import EditUser from "./components/EditUser";
import ChangePass from "./components/ChangePass";

function App() {
  return (
    <div className="App">
      <UserState>
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
                  <Route path="/userposts" element={<UserPosts />}></Route>
                  <Route path="/edituser" element={<EditUser/>}></Route>
                  <Route path="/changepassword" element={<ChangePass/>}></Route>
                </Routes>
              </div>
            </BrowserRouter>
          </PostState>
        </AlertState>
      </UserState>
    </div>
  );
}

export default App;
//npm react-router-dom
