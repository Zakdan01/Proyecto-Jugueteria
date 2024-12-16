import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import "./estilos/FAQ.css";

export default function Cont() {
  return (
    <div className="Faq">
      <div className="Preg">
        <h1>Ubicaciones y Contactos</h1>
      </div>
      <div className="direcciones">
        <div className="dir">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Telefonos:</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Línea principal: +1 (555) 123-4567
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Atención al cliente: +1 (555) 987-6543
              </CardSubtitle>
              <CardTitle tag="h5">Horarios de Atencion:</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Lunes a viernes: 9:00 AM - 7:00 PM
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Sábados: 10:00 AM - 6:00 PM
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Domingos y festivos: 11:00 AM - 4:00 PM
              </CardSubtitle>
              <CardTitle tag="h5">Dirección:</CardTitle>
              <CardText>
                Juguetería "El Mundo de los Juguetes" Calle Principal #123,
                Esquina con Avenida Felicidad, Ciudad de los Sueños, Estado de
                la Alegría, 56789.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="dir">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Telefonos:</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Línea principal: +1 (777) 456-7890
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                WhatsApp: +1 (777) 654-3210
              </CardSubtitle>
              <CardTitle tag="h5">Horarios de Atencion:</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Lunes a viernes: 8:30 AM - 6:30 PM
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Sábados: 9:00 AM - 5:00 PM
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Domingos: Cerrado
              </CardSubtitle>
              <CardTitle tag="h5">Dirección:</CardTitle>
              <CardText>
                Juguetería "El Mundo de los Juguetes" Avenida Arcoíris #456,
                Local 12, Centro Comercial Juguetelandia, Ciudad Fantasía,
                Código Postal 43210.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
