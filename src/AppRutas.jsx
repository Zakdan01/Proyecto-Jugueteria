import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Jarma from "./Jarma.jsx";
import Jacci from "./Jacci.jsx";
import Jelec from "./Jelec.jsx";
import Jmes from "./Jmes.jsx";
import Jinf from "./Jinf.jsx";
import Ofert from "./Ofert.jsx";
import Snos from "./Snos.jsx";
import Cont from "./Cont.jsx";
import FAQ from "./FAQ.jsx";
import Carrito from "./Carrito.jsx";

export default function AppRutas({ carrito, setCarrito, eliminarDelCarrito }) {
  return (
    <Routes>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path="/JA" element={<Jarma carrito={carrito} setCarrito={setCarrito} ></Jarma>}></Route>
      <Route path="/JAM" element={<Jacci carrito={carrito} setCarrito={setCarrito}></Jacci>}></Route>
      <Route path="/JE" element={<Jelec carrito={carrito} setCarrito={setCarrito}></Jelec>}></Route>
      <Route path="/JM" element={<Jmes carrito={carrito} setCarrito={setCarrito}></Jmes>}></Route>
      <Route path="/JI" element={<Jinf carrito={carrito} setCarrito={setCarrito}></Jinf>}></Route>

      <Route path="/OF" element={<Ofert carrito={carrito} setCarrito={setCarrito}></Ofert>}></Route>
      <Route path="/CAR" element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />}></Route>
      <Route path="/SN" element={<Snos></Snos>}></Route>
      <Route path="/CONT" element={<Cont></Cont>}></Route>
      <Route path="/FAQ" element={<FAQ></FAQ>}></Route>

      <Route path="/LOG" element={<h1>Login</h1>}></Route>
      <Route path="/REG" element={<h1>Registro</h1>}></Route>
      <Route path="/CAR" element={<h1>Carrito</h1>}></Route>

      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
}
