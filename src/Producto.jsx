import React from "react";
import "./estilos/Producto.css";

const Producto = ({ nombre, precio, imagen, agregarAlCarrito }) => {
  return (
    <div className="produs">
      <img src={imagen} alt={nombre} className="producto-imagen" />
      <h3 className="producto-nombre">{nombre}</h3>
      <p className="producto-precio">Precio: {precio} Bs.</p>
      <button className="producto-boton" onClick={agregarAlCarrito}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Producto;