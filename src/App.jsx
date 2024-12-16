import { useState } from "react";
import "./estilos/App.css";

import AppRutas from "./AppRutas.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  /*Para el carrito*/
  const [carrito, setCarrito] = useState([]);
  const eliminarDelCarrito = (index) => {
    setCarrito((prevCarrito) => 
      index === true ? [] : prevCarrito.filter((_, i) => i !== index)
    );
  };
  /**/
  return (
    <>
      <div className="pagina">
          <Header carrito={carrito}></Header>
          <AppRutas carrito={carrito} setCarrito={setCarrito} eliminarDelCarrito={eliminarDelCarrito}></AppRutas>
          <Footer></Footer>
      </div>
    </>
  );
}
