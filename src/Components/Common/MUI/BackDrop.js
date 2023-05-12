import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function SimpleBackdrop({ backDropState }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#635d5c", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDropState}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
