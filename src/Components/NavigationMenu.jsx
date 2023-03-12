import { Box, Popover, Typography } from "@mui/material";
import { Items } from "assets/data/NavigationMenuItems";
import React, { useEffect, useRef, useState } from "react";
import SubMenu from "./SubMenu";

function NavigationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElForSubMenu, setanchorElForSubMenu] = React.useState(null);
  const [subMenuId, setSubMenuId] = React.useState(null);
  const [navItems, setNavItems] = React.useState({
    currentItems: Items,
    navItems: [],
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  window.addEventListener("resize", (event) => {
    if (
      event.currentTarget.innerWidth < 900 &&
      event.currentTarget.innerWidth > 600 &&
      navItems.navItems.length === 0
    )
      return setNavItems((prev) => ({
        currentItems: Items.slice(0, -4),
        navItems: navItems.currentItems.slice(2, -1),
      }));
    else if (
      event.currentTarget.innerWidth < 600 &&
      navItems.navItems.length < 3
    )
      return setNavItems((prev) => ({
        currentItems: Items.slice(0, 2),
        navItems: Items.slice(-6, -1),
      }));
  });

  const handleOpen = (event, id) => {
    console.log('ID', id, event)
    setSubMenuId(subMenuId === id ? null : id)
    setanchorElForSubMenu(event.currentTarget);
  };
  const handleCloseSubMenu = () => {
    setanchorElForSubMenu(null);
    setSubMenuId(null)
  };
  useEffect(() => {
    if (
      window.innerWidth < 900 &&
      window.innerWidth > 600 &&
      navItems.navItems.length === 0
    )
      return setNavItems((prev) => ({
        currentItems: Items.slice(0, -4),
        navItems: navItems.currentItems.slice(2, -1),
      }));
    else if (window.innerWidth < 600 && navItems.navItems.length < 3)
      return setNavItems((prev) => ({
        currentItems: Items.slice(0, 2),
        navItems: Items.slice(-6, -1),
      }));
  }, []);
  return (
    <>
      <Box
        sx={{ display: { lg: "flex", xs: "none" } }}
        justifyContent={"space-evenly"}
        marginY={5}
        paddingX={5}
      >
        {Items.map(({ label, id }, index) => (
          <>
            <Box component={"span"} onClick={(event) => handleOpen(event, id)}>
              {label}
            </Box>
            <SubMenu
              anchorEl={anchorElForSubMenu}
              handleClose={handleCloseSubMenu}
              open={id === subMenuId}
            />
          </>
        ))}
      </Box>
      <Box
        sx={{ display: { xs: "flex", lg: "none" } }}
        justifyContent={"space-evenly"}
        marginY={5}
        paddingX={5}
      >
        {navItems.currentItems.map(({ label }) => (
          <Box>{label}</Box>
        ))}
        <Typography
          display={navItems.navItems.length ? "block" : "none"}
          onClick={handleClick}
        >
          More
        </Typography>

        <Popover
          id={"PopOver"}
          open={anchorEl}
          hideBackdrop={true}
          anchorEl={anchorEl}
          onBlur={() => setAnchorEl(null)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            sx: {
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            },
          }}
        >
          {navItems.navItems.map(({ label }) => (
            <span>
              {label} <br />
            </span>
          ))}
        </Popover>
      </Box>
    </>
  );
}

export default NavigationMenu;
