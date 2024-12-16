import React, { useState } from "react";
import Catalogo from "./Catalogo.jsx";
import "./estilos/Juguetes.css";

export default function Jelec({ carrito, setCarrito }) {

  const productos = [
    {
      nombre: "Tren HS Train Alta velocidad (705)",
      precio: 310.50,
      imagen: "/public/electricos/je5.jpg",
    },
    {
      nombre: "Tren Talgo Articulado metalico con luz",
      precio: 245.00,
      imagen: "/public/electricos/je6.jpg",
    },
    {
      nombre: "Auto Drift Control Remoto 4x4 Luces Neumáticos",
      precio: 140.00,
      imagen: "/public/electricos/je1.webp",
    },
    {
      nombre: "Auto Loco Con Doble Control Remoto Y Mano Negro",
      precio: 147.00,
      imagen: "/public/electricos/je2.webp",
    },
    {
      nombre: "Auto Control Remoto Sensor Movimiento Control Mano Gestos Gd",
      precio: 160.00,
      imagen: "/public/electricos/je3.webp",
    },
    {
      nombre: "Dinosaurio Auto Control Remoto Recargable Carro Juguete Niño Color Verde",
      precio: 140.00,
      imagen: "/public/electricos/je4.webp",
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
          <img src="\public\electricos\je1.webp" />
          <img src="\public\electricos\je5.jpg" />
          <img src="\public\electricos\je4.webp" />
        </section>
      </div>
      <div className="mprod">
        <div className="baneprod">
          <h2>Juguetes Electricos</h2>
        </div>
        <div className="catprod">
          <Catalogo productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    </div>
  );
}
