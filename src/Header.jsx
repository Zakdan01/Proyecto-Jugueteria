import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import "./estilos/Header.css";

export default function Header( carrito ) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <header className="caja">
      <div className="nombre">
        El Mundo de los Juguetes
      </div>
      <div className="item catalogo">
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Catalogo
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/JA" className="custom-link">
                Juguetes Armables
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/JAM" className="custom-link">
                Juguetes de Acción y Muñecas
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/JE" className="custom-link">
                Juguetes Eléctricos
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/JM" className="custom-link">
                Juegos de Mesa
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/JI" className="custom-link">
                Juguetes para Infantes
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="item ofertas">
        <NavItem>
          <NavLink>
            <Link to="/OF" className="custom-link">
              Ofertas
            </Link>
          </NavLink>
        </NavItem>
      </div>
      
      <div className="item carrito">
        <NavItem>
          <NavLink>
            <Link to="/CAR" className="custom-link">
            Carrito
            </Link>
          </NavLink>
        </NavItem>
      </div>

      <div className="item inicio">
        <NavItem>
          <NavLink active>
            <Link to="/" className="custom-link">
              <img src="\public\logo.png" alt="Inicio" className="logo-image" />
            </Link>
          </NavLink>
        </NavItem>
      </div>
      <div className="item sobrenosotros">
        <NavItem>
          <NavLink>
            <Link to="/SN" className="custom-link">
              Sobre Nosotros
            </Link>
          </NavLink>
        </NavItem>
      </div>
      <div className="item contactos">
        <NavItem>
          <NavLink>
            <Link to="/CONT" className="custom-link">
              Contactos
            </Link>
          </NavLink>
        </NavItem>
      </div>
      <div className="item faq">
        <NavItem>
          <NavLink>
            <Link to="/FAQ" className="custom-link">
              FAQ
            </Link>
          </NavLink>
        </NavItem>
      </div>
    </header>
  );
}
