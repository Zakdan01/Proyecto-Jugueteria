import React, { useState } from "react";
import Catalogo from "./Catalogo.jsx";
import "./estilos/Juguetes.css";

export default function Jinf({ carrito, setCarrito }) {


  const productos = [
    {
      nombre: "FISHER PRICE PIRAMIDES DE ARGOLAS ",
      precio: 88.00,
      imagen: "/public/infantil/jb1.jpg",
    },
    {
      nombre: "Guitarra de juguete musical ",
      precio: 129.00,
      imagen: "/public/infantil/jb2.webp",
    },
    {
      nombre: "Reloj de juguete sensorial ",
      precio: 59.00,
      imagen: "/public/infantil/jb3.webp",
    },
    {
      nombre: "Set de juguetes para bano de bebe ",
      precio: 99.00,
      imagen: "/public/infantil/jb4.webp",
    },
    {
      nombre: "Fuente con Agua de juguete con animales del mar 18 piezas ",
      precio: 99.00,
      imagen: "/public/infantil/jb5.webp",
    },
  ];

  const agregarAlCarrito = (producto) => {
    // Comprobamos si el producto ya existe en el carrito
    const productoExistente = carrito.find(
      (item) => item.nombre === producto.nombre
    );

    if (productoExistente) {
      // Incrementar la cantidad si ya existe
      setCarrito(
        carrito.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Agregar nuevo producto con cantidad inicial de 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <div className="juguetes">
      <div className="galeria">
        <section className="seccion">
          <img src="\public\infantil\jb1.jpg" />
          <img src="\public\infantil\jb3.webp" />
          <img src="\public\infantil\jb5.webp" />
        </section>
      </div>
      <div className="mprod">
        <div className="baneprod">
          <h2>Juguetes infantiles</h2>
        </div>
        <div className="catprod">
          <Catalogo productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    </div>
  );
}
