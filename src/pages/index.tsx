import React, { Component } from "react";
import { TopNavbar } from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      <TopNavbar />

      <div className="sobre">
        <h2>null</h2>
      </div>

      <div className="pdca">
        <img src="../images/IFMAIS logo.png" alt="" />
      </div>

      <div className="equipe"></div>

      <div className="empresas"></div>

      <div className="incubadora">
        <img src="../images/IUT logo.png" alt="" />
      </div>
    </>
  );
}

export default Home;
