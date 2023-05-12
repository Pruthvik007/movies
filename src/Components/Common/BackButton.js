import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ link }) => {
  return (
    <div style={{ position: "fixed", right: "2rem",bottom:"1rem" }}>
      <Link to={link}>
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
};

export default BackButton;
