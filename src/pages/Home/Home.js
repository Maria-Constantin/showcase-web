import React from "react";
import FooterComponent from "../../components/Footer/Footer";
import HomeMainContent from "../../containers/HomeContainer/HomeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.scss";

const HomePage = () => {
  return (
    <>
      <HomeMainContent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
