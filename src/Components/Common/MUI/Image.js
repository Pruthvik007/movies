import { Container } from "@mui/material";
import React from "react";

const Image = ({ src, alt }) => {
  return (
    <Container maxWidth="sm">
      <img className="img-fluid" src={src} alt={alt} />
    </Container>
  );
};

export default Image;
