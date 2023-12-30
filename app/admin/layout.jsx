import React from "react";
import "./styles/main.scss";
import Navbar from "./components/dashboard/navbar/Navbar";
import Footer from "./components/dashboard/footer/Footer";
import Menu from "./components/dashboard/menu/Menu";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
