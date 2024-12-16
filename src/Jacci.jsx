import React, { useState } from "react";
import Catalogo from "./Catalogo.jsx";
import "./estilos/Juguetes.css";

export default function Jacci({ carrito, setCarrito }) {


  const productos = [
    {
      nombre: "Bebé Recién Nacida Luna",
      precio: 52.99,
      imagen: "/public/accmun/m1.jpg",
    },
    {
      nombre: "Barbie Casa 2 pisos",
      precio: 120.00,
      imagen: "/public/accmun/b1.avif",
    },
    {
      nombre: "Barbie 60 Aniversario Dreamhouse",
      precio: 120.00,
      imagen: "/public/accmun/b2.avif",
    },
    {
      nombre: "Funko Pop Pikachu",
      precio: 18.95,
      imagen: "/public/accmun/f1.jpg",
    },
    {
      nombre: "Funko Pop Bender (Exclusivo)",
      precio: 16.95,
      imagen: "/public/accmun/f2.jpg",
    },
    {
      nombre: "Spider-Man Advanced Suit",
      precio: 1099.00,
      imagen: "/public/accmun/ac1.jpg",
    },
    {
      nombre: "Silent Hill The Executioner (Pyramid Head)",
      precio: 379.00,
      imagen: "/public/accmun/ac2.jpg",
    },
    {
      nombre: "Marvel The Ghost Rider 1:6 Scale Diorama",
      precio: 1119.00,
      imagen: "/public/accmun/ac3.jpg",
    },
    {
      nombre: "Street Fighter V: Ryu",
      precio: 280.00,
      imagen: "/public/accmun/ac4.jpg",
    },
    {
      nombre: "The Simpsons Talking Krusty Doll",
      precio: 69.00,
      imagen: "/public/accmun/ac5.jpg",
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
          <img src="\public\accmun\b1.avif" />
          <img src="\public\accmun\f1.jpg" />
          <img src="\public\accmun\ac2.jpg" />
          <img src="\public\accmun\ac4.jpg" />
          <img src="\public\accmun\m1.jpg" />
          <img src="\public\accmun\ac5.jpg" />
        </section>
      </div>
      <div className="mprod">
        <div className="baneprod">
          <h2>Juguetes Accion y Muñecas de coleccion</h2>
        </div>
        <div className="catprod">
          <Catalogo productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    </div>
  );
}
