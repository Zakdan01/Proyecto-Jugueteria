import React, { useState } from "react";
import Catalogo from "./Catalogo.jsx";
import "./estilos/Juguetes.css";

export default function Jarma  ({ carrito, setCarrito })  {

  const productos = [
    {
      nombre: "Fortaleza Eldorado",
      precio: 50.00,
      imagen: "/public/armables/l1.webp",
    },
    {
      nombre: "Plaza Mayor Medieval",
      precio: 30.00,
      imagen: "/public/armables/l2.webp",
    },
    {
      nombre: "Millennium Falco",
      precio: 70.00,
      imagen: "/public/armables/l3.webp",
    },
    {
      nombre: "Barcaza Velera de Jabba",
      precio: 70.00,
      imagen: "/public/armables/l4.webp",
    },
    {
      nombre: "X-Men: Mansión X",
      precio: 70.00,
      imagen: "/public/armables/l5.webp",
    },
    {
      nombre: "Rasti Kit 200 Piezas Básicas",
      precio: 35.00,
      imagen: "/public/armables/r1.webp",
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
    <div className="juguetes">
      <div className="galeria">
        <section className="seccion">
          <img src="\public\armables\l1.webp" />
          <img src="\public\armables\l3.webp" />
          <img src="\public\armables\l5.webp" />
          <img src="\public\armables\r1.webp" />
        </section>
      </div>
      <div className="mprod">
        <div className="baneprod">
          <h2>Juguetes Armables</h2>
        </div>
        <div className="catprod">
          <Catalogo productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    </div>
  );
};
