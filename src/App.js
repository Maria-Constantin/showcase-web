import './App.css';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactMePage from './pages/ContactMePage';
import NavbarComponent from './components/NavbarComponent';
import ThankYou from './pages/ThankYou';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/navbar.scss';

function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <div className="App">
        <NavbarComponent />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutMePage" element={<AboutMePage />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/ContactMePage" element={<ContactMePage />} />
          <Route path="/ThankYou" element={<ThankYou />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
