import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Back = styled(Button)({
  position: "fixed",
  bottom: "24px",
  right: "24px",
  zIndex: 9999,
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
    bottom: "16px",
    right: "16px",
  },
});

const BackButtonContainer = styled("div")({
  position: "fixed",
  bottom: 0,
  right: 0,
  padding: "24px",
});

function BackButton({ link }) {
  return (
    <Link to={link}>
      <BackButtonContainer>
        <Back variant="contained" color="primary">
          Back
        </Back>
      </BackButtonContainer>
    </Link>
  );
}

export default BackButton;
