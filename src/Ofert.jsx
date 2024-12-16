import React, { useState } from "react";
import "./estilos/Ofert.css";
import Catalogo from "./Catalogo.jsx";
import "./estilos/Juguetes.css";

export default function Ofert({ carrito, setCarrito }) {

  const productos = [
    {
      nombre: "Peluche Navideño Pingüino",
      precio: 120.00,
      imagen: "/public/ofertas/of1.jpg",
    },
    {
      nombre: "Peluche Navideño Dorclife ",
      precio: 150,
      imagen: "/public/ofertas/of2.jpg",
    },
    {
      nombre: "LEGO Árbol de Navidad ",
      precio: 180.00,
      imagen: "/public/ofertas/of3.jpg",
    },
    {
      nombre: "LEGO Cascanueces ",
      precio: 160.00,
      imagen: "/public/ofertas/of4.jpg",
    },
    {
      nombre: "PLAXSOON Juego de construcción de casa de jengibre de Navidad",
      precio: 180.00,
      imagen: "/public/ofertas/of5.jpg",
    },
    {
      nombre: "LEGO Trineo de Papá Noel Decorativo de Navidad",
      precio: 220.00,
      imagen: "/public/ofertas/of6.jpg",
    },
    {
      nombre: "LEGO Adornos de Pan de Jengibre",
      precio: 110.00,
      imagen: "/public/ofertas/of7.jpg",
    },
  ];

  const agregarAlCarrito = (producto) => {

    const productoExistente = carrito.find(
      (item) => item.nombre === producto.nombre
    );

    if (productoExistente) {

      setCarrito(
        carrito.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {

      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <div className="ofer">
      <div className="Bann">
        <figure className="figura">
          <img src="\public\bannernav.jpg" alt="Banner" />
        </figure>
        <div className="titulopf-wrapper">
          <h1 className="titulopf">
            Ofertas de Navidad Hasta un 50% de Descuento
          </h1>
        </div>
      </div>
      <div className="mprod">
        <div className="baneprod">
          <h2>Juguetes en Promocion</h2>
        </div>
        <div className="catprod">
          <Catalogo productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    </div>
  );
}
