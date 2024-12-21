import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import HomeMainContent from "../containers/HomeMainContent";
import Parallax from "../components/Parralax";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.scss";

const HomePage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarComponent />
      {/* Main Content */}
      <HomeMainContent />

      <FooterComponent />

    </>
  );
};

export default HomePage;
