import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import HomeMainContent from "../containers/HomeMainContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.scss";

const HomePage = () => {
  return (
    <>

      <HomeMainContent />

      <FooterComponent />
    </>
  );
};

export default HomePage;
