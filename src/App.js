import './App.css';
import HomePage from './pages/Home/Home';
import NavbarComponent from './components/Navbar/Navbar';
import ThankYou from './pages/ThankYou/ThankYou';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarComponent />
        <Routes path="#">
          <Route path="/" element={<HomePage/>}/>
          <Route path="/ThankYou" element={<ThankYou />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
