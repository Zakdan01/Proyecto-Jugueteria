import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "./estilos/Snos.css";

export default function Snos() {
  return (
    <>
      <div className="nosotros">
        <Card className="my-2">
          <CardImg
            alt="Card image cap"
            src="\public\fachada.jpg"
            style={{
              width: "auto",
              height: "500px",
              margin: "25px",
              border: "2px solid black",
            }}
            top
            width="100%"
          />
          <div className="palabr">
            <CardBody>
              <CardTitle tag="h5">Sobre Nosotros </CardTitle>
              <CardText>
                <strong>Bienvenidos a El Mundo de los Juguetes</strong>En El
                Mundo de los Juguetes, creemos en la magia de la imaginación y
                el poder de los juegos para crear momentos inolvidables. Nuestra
                misión es ofrecer una experiencia única, donde niños y niñas
                encuentren los juguetes perfectos para aprender, explorar, y
                divertirse.
              </CardText>
              <CardTitle tag="h5">¿Quiénes somos?</CardTitle>
              <CardText>
                Somos una tienda dedicada a brindar felicidad a las familias a
                través de una amplia selección de juguetes de calidad. Desde
                juguetes clásicos que nunca pasan de moda, hasta las últimas
                novedades del mercado, trabajamos para cubrir todas las edades,
                intereses y necesidades.
              </CardText>

              <CardTitle tag="h5">Nuestra historia</CardTitle>
              <CardText>
                El Mundo de los Juguetes nació con la idea de reunir en un solo
                lugar los sueños de pequeños y grandes. Con años de experiencia,
                nos hemos convertido en un referente para padres, educadores, y
                cualquier persona que busca regalar diversión y aprendizaje.
              </CardText>
              <CardTitle tag="h5">Nuestro compromiso</CardTitle>
              <CardText>
                Calidad y seguridad: Todos nuestros productos cumplen con los
                estándares internacionales de seguridad. Diversidad: Contamos
                con juguetes para todas las edades, desde bebés hasta
                adolescentes. Atención personalizada: Nuestro equipo está listo
                para ayudarte a elegir el regalo ideal.
              </CardText>
              <CardTitle tag="h5">
                {" "}
                Visítanos y comparte la diversión{" "}
              </CardTitle>
              <CardText>
                <small className="text-muted">
                  Te invitamos a explorar El Mundo de los Juguetes y descubrir
                  todo lo que tenemos preparado para ti. Porque la diversión no
                  tiene límites, y cada juguete tiene una historia esperando ser
                  contada.
                </small>
              </CardText>
            </CardBody>
          </div>
          <CardImg
            alt="Card image cap"
            src="\public\ubi.png"
            style={{
              width: "auto",
              height: "500px",
              margin: "25px",
              border: "2px solid black",
            }}
            top
            width="100%"
          />
        </Card>
      </div>
    </>
  );
}
