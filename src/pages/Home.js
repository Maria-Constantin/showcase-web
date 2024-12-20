import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.scss';
import HomeMainContent from "../containers/HomeMainContent";

const HomePage = () => {
  return (
    <div>
      {/* Navigation bar */}
      <NavbarComponent />
      <HomeMainContent />
    </div>
  );
};

export default HomePage;