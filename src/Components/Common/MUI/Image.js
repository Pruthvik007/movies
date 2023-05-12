import { Container } from "@mui/material";
import React from "react";

const Image = ({ src, alt }) => {
  return (
    <Container maxWidth="sm">
      {src && <img className="img-fluid" src={src} alt={alt} loading="lazy"/>}
    </Container>
  );
};

export default Image;
