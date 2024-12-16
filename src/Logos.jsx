import React from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

export default function Logos(props) {
  return (
    <Card
      style={{
        width: "12rem",
        height: "16rem",
        margin:15
      }}
    >
      <img alt="Sample" src={props.imag} />
      <CardBody>
        <CardTitle tag="h5">{props.nom}</CardTitle>
      </CardBody>
    </Card>
  );
}
