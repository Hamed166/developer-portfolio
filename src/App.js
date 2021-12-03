
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Home from './Home/Home/Home';
import Resume from './Pages/Resume/Resume';
import About from './Home/About/About';

function App() {
  return (
    <div >
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
