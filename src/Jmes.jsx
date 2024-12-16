import React, { useState } from "react";
import Catalogo from "./Catalogo.jsx";
import "./estilos/Juguetes.css";

export default function Jmes({ carrito, setCarrito }) {


  const productos = [
    {
      nombre: "Arkham Horror LCG: Las Llaves Escarlata",
      precio: 181.00,
      imagen: "/public/mesa/jm1.jpg",
    },
    {
      nombre: "Zombicide Undead or Alive: Running Wild",
      precio: 140.00,
      imagen: "/public/mesa/jm2.jpg",
    },
    {
      nombre: "Catan",
      precio: 245.00,
      imagen: "/public/mesa/jm3.webp",
    },
    {
      nombre: "Trampa del Pinguino",
      precio: 82.30,
      imagen: "/public/mesa/jm4.webp",
    },
    {
      nombre: "Gallina turuleka",
      precio: 120.90,
      imagen: "/public/mesa/jm5.webp",
    },
    {
      nombre: "Operation X-Ray",
      precio: 250.00,
      imagen: "/public/mesa/jm6.webp",
    },
    {
      nombre: "Uno stacko",
      precio: 229.00,
      imagen: "/public/mesa/jm7.webp",
    },
    {
      nombre: "Monopoly deal juego de cartas",
      precio: 80.00,
      imagen: "/public/mesa/jm8.webp",
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
          <img src="\public\mesa\jm1.jpg" />
          <img src="\public\mesa\jm5.webp" />
          <img src="\public\mesa\jm8.webp" />
          <img src="\public\mesa\jm3.webp" />
          <img src="\public\mesa\jm4.webp" />
        </section>
      </div>
      <div className="mprod">
        <div className="baneprod">
          <h2>Juegos de Mesa</h2>
        </div>
        <div className="catprod">
          <Catalogo productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    </div>
  );
}
