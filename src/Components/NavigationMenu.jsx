import { Box } from "@mui/material";
import { Items } from "assets/data/NavigationMenuItems";
import React from "react";

function NavigationMenu() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-evenly"}
      marginY={5}
      paddingX={5}
    >
      {Items.map(({ label }) => (
        <span>{label}</span>
      ))}
    </Box>
  );
}

export default NavigationMenu;
