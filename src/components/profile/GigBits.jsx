import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function FloatingActionButtonExtendedSize() {
  const [width, setwidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseEnter = () => {
    setwidth(100);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setwidth(0);
    setOpacity(0);
  };

  return (
    <Box sx={{ position: "fixed", zIndex: 10, top: "5vh", left: "5vh" }}>
      <Fab variant="extended" size="medium" color="primary">
        <MonetizationOnIcon sx={{ mr: 1 }} />
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width:width, opacity:opacity, transition: "width 0.5s, opacity 0.5s" }}
        >
          money
        </div>
      </Fab>
    </Box>
  );
}