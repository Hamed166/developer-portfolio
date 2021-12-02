
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
