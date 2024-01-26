
import { 
  BrowserRouter,
  Routes,
  Route } 
  from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//npm react-router-dom concurrently