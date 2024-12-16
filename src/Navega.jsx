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

export default function Navega(porps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <Nav tabs>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Catalogo
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to="/JA">Juguetes Armables</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/JAM">Juguetes de Acción y Muñecas</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/JE">Juguetes Eléctricos</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/JM">Juegos de Mesa</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/JI">Juguetes para Infantes</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink>
          <Link to="/OF">Ofertas</Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink active>
          <Link to="/">Inicio</Link>
        </NavLink>
      </NavItem>
      
      <NavItem>
        <NavLink>
          <Link to="/SN">Sobre Nosotros</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/CONT">Contactos</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/FAQ">FAQ</Link>
        </NavLink>
      </NavItem>
    </Nav>
  );
}
