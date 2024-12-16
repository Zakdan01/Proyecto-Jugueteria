import React from "react";
import "./estilos/Catalogo.css";
import Producto from "./Producto.jsx";

const Catalogo = ({ productos, agregarAlCarrito }) => {
  return (
    <div className="catalogo">
      {productos.map((producto, index) => (
        <Producto
          key={index}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
          agregarAlCarrito={() => agregarAlCarrito(producto)}
        />
      ))}
    </div>
  );
};

export default Catalogo;
