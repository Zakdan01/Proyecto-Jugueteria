import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./estilos/Footer.css";

export default function Footer(porps) {
  return (
    <div className="foot">
      <div className="datos">
        <ul>
          <li>
            <Link to="/SN" className="cust">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/CONT" className="cust">
              Contactos
            </Link>
          </li>
          <li>
            <Link to="/FAQ" className="cust">
              FAQ
            </Link>
          </li>
        </ul>
        <p>© 2024 Ivan Rodrigo Rios Acuña, Inc</p>
      </div>
      
    </div>
  );
}
