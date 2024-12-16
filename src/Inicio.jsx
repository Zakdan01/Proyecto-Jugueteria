import React, { useState } from "react";
import "./estilos/Inicio.css";
import Logos from "./logos.jsx";

export default function Inicio() {
  return (
    <div className="ini">
      <div className="galer">
        <section className="seccion">
          <img src="\public\ja.webp" />
          <img src="\public\je.jpg" />
          <img src="\public\jac.jpg" />
          <img src="\public\jmu.jpg" />
          <img src="\public\jm.webp" />
          <img src="\public\ji.jpg" />
        </section>
      </div>

      <div className="marcas">
        <div className="titulo">Marcas de Juguetes</div>
        <div className="logos">
          <Logos nom="Melisa y Doug" imag="\public\marcas\l1.jpg"></Logos>
          <Logos nom="Mega" imag="\public\marcas\l2.jpg"></Logos>
          <Logos nom="Hot wheels" imag="\public\marcas\l3.jpg"></Logos>
          <Logos nom="Hasbro" imag="\public\marcas\l4.jpg"></Logos>
          <Logos nom="Matel" imag="\public\marcas\l5.jpg"></Logos>
          <Logos nom="Lego" imag="\public\marcas\l6.jpg"></Logos>
          <Logos nom="Bandai Namco" imag="\public\marcas\l7.jpg"></Logos>
          <Logos nom="MGA" imag="\public\marcas\l8.jpg"></Logos>
          <Logos nom="Nerf" imag="\public\marcas\l9.jpg"></Logos>
          <Logos nom="My Little Pony" imag="\public\marcas\l10.jpg"></Logos>
          <Logos nom="Barbie" imag="\public\marcas\l11.jpg"></Logos>
          <Logos nom="Leap Frog" imag="\public\marcas\l12.jpg"></Logos>
          <Logos nom="FisherPrice" imag="\public\marcas\l13.jpg"></Logos>
        </div>
      </div>
      <section className="pub">publicidad</section>
    </div>
  );
}
