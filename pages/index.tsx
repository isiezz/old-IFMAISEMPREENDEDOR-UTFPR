import React, { Component } from "react";
import styles from "./style.module.css";

const Home = () => {
  return (

    <body>
    <div className="menu">

        <header>
            <a href="#" className="navbar-brand"><span className="IF-logo">IF logo</span></a>
            <ul className="navbar">
                <li><a href=".sobre">sobre</a></li>
                <li><a href=".pdca">PDCA</a></li>
                <li><a href=".equipe">equipe</a></li>
                <li><a href=".empresas">empresas</a></li>
                <li><a href="https://instagram.com/ifmaisempreendedorutfprr?igshid=YmMyMTA2M2Y=" className="instagram-projeto">Instagram</a></li>
            </ul>
        </header>

        <div className="home">
            <a href="https://ifmaisempreendedor.ifsuldeminas.edu.br" className=""><span className="logo-ifmais">IFMAISEMPREENDEDOR</span></a>
        </div>

        {/* <img src="../images/" alt="equipe UTFPR-CM" className="equipe-home"> */}

        <span className="apoio">
            <a href="Instagram UTFPR" id="instagram-utfpr"></a>
            <a href="Instagram IUT" id="instagram-iut"></a>
        </span>
        
    </div>

    <div className="sobre">
        <h2>null</h2>
    </div>

    <div className="pdca">
        {/* <img src="../images/IFMAIS logo.png" alt=""> */}
    </div>

    <div className="equipe">

    </div>

    <div className="empresas">

    </div>

    <div className="incubadora">

        {/* <img src="../images/IUT logo.png" alt=""> */}
        
    </div>

</body>

  );
};

export default Home;
