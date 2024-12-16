import React from "react";
import "./estilos/Carrito.css";

export default function Carrito({ carrito, eliminarDelCarrito }) {
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  return (
    <div className="carrdet">
      <div className="carrtit">
        <h1>Carrito de Compras</h1>
      </div>
      <div className="carr-detall">
        {carrito.length === 0 ? (
          <p className="carrv">El carrito está vacío</p>
        ) : (
          <ul className="carrlist">
            {carrito.map((item, index) => (
              <li key={index} className="carr-item">
                <span className="carr-item-nombre">{item.nombre} </span>
                <span> Cantidad: {item.cantidad} </span>
                <span> Precio: {item.precio} Bs.</span>
                <span> Total: {item.precio * item.cantidad} Bs.</span>{" "}
                <button
                  className="carr-item-eliminar"
                  onClick={() => eliminarDelCarrito(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="carr-total">
        <h2>Total: {total.toFixed(2)} Bs.</h2>{" "}
        {/* Muestra el total de todo el carrito */}
      </div>
      <button
        className="carr-eliminar-todo"
        onClick={() => eliminarDelCarrito(true)}
      >
        Vaciar Carrito
      </button>
    </div>
  );
}
