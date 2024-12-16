import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "./estilos/FAQ.css";

export default function FAQ(props) {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="Faq">
      <div className="Preg">
        <h1>Preguntas Frecuentes</h1>
      </div>
      <div className="pregun">
        <Accordion flush open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">
              ¿Los juguetes cumplen con normas de seguridad?
            </AccordionHeader>
            <AccordionBody accordionId="1">
              Sí, todos nuestros juguetes cumplen con las normas de seguridad
              internacionales y están fabricados con materiales no tóxicos,
              aptos para niños. Además, verificamos que cada producto pase por
              estrictos controles de calidad antes de ponerlo a la venta.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">
              ¿Tienen juguetes para bebés o infantes?
            </AccordionHeader>
            <AccordionBody accordionId="2">
              Por supuesto, contamos con una amplia variedad de juguetes
              diseñados especialmente para bebés y niños pequeños. Estos
              productos están pensados para estimular el desarrollo temprano,
              son suaves y seguros, y están hechos de materiales aptos para
              edades menores a 3 años.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">
              ¿Los juguetes requieren baterías? ¿Vienen incluidas?
            </AccordionHeader>
            <AccordionBody accordionId="3">
              Algunos de nuestros juguetes electrónicos requieren baterías para
              funcionar. En la descripción de cada producto indicamos si las
              baterías están incluidas o deben adquirirse por separado.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">
              ¿Qué métodos de pago aceptan?
            </AccordionHeader>
            <AccordionBody accordionId="4">
              Aceptamos pagos con tarjetas de crédito y débito (Visa,
              MasterCard, y American Express), transferencias bancarias, y pagos
              en efectivo a través de sistemas como depósitos en tiendas
              autorizadas.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">
              ¿Puedo pagar en cuotas?
            </AccordionHeader>
            <AccordionBody accordionId="5">
              Sí, ofrecemos la opción de pagar en cuotas sin intereses en
              compras con tarjetas de crédito seleccionadas. Consulta las
              condiciones al momento de realizar tu compra.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">
              ¿Aceptan devoluciones o reembolsos si el producto llega dañado?
            </AccordionHeader>
            <AccordionBody accordionId="6">
              Sí, si recibes un producto dañado, puedes solicitar una devolución
              o reembolso dentro de los primeros 7 días hábiles después de
              recibirlo. Solo necesitamos que conserves el empaque original y el
              comprobante de compra.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="7">
              ¿Qué hago si recibo un producto defectuoso?
            </AccordionHeader>
            <AccordionBody accordionId="7">
              Si recibes un producto defectuoso, por favor contáctanos
              inmediatamente a través de nuestro formulario de contacto o al
              número de atención al cliente. Evaluaremos el caso y te enviaremos
              un reemplazo o emitiremos un reembolso según corresponda.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="8">
              ¿Los juguetes tienen garantía?
            </AccordionHeader>
            <AccordionBody accordionId="8">
              Sí, la mayoría de nuestros juguetes tienen una garantía de hasta 6
              meses por defectos de fabricación. Consulta la descripción del
              producto para conocer los términos específicos.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="9">
              ¿Tienen promociones o descuentos especiales?
            </AccordionHeader>
            <AccordionBody accordionId="9">
              ¡Sí! Regularmente ofrecemos promociones especiales, descuentos de
              temporada, y ofertas exclusivas para nuestros clientes suscritos
              al boletín de noticias. ¡Mantente atento a nuestras redes sociales
              y sitio web para no perderte nada!
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="10">
              ¿Puedo obtener un descuento por compras al por mayor?
            </AccordionHeader>
            <AccordionBody accordionId="10">
              Sí, ofrecemos descuentos especiales para compras al por mayor.
              Ponte en contacto con nuestro equipo de ventas para obtener más
              información sobre las condiciones y precios.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader  targetId="11">
              ¿Puedo envolver el juguete como regalo?
            </AccordionHeader>
            <AccordionBody accordionId="11">
              ¡Claro! Ofrecemos un servicio de envoltura de regalos por un
              pequeño costo adicional. Puedes seleccionar esta opción al momento
              de realizar tu compra, y nosotros nos encargaremos de que el
              empaque sea perfecto para cualquier ocasión especial.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
