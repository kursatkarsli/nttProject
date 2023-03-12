import PropTypes from "prop-types";
import {
  Box,
  ClickAwayListener,
  Container,
  Fade,
  Paper,
  Popper,
  Typography,
} from "@mui/material";

export default function SubMenu(props) {
  const { anchorEl, handleClose, open } = props;

  return (
    <Popper
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      transition
      popperOptions={{
        strategy: "absolute",
      }}
      sx={{
        minWidth: "40%",
      }}
          onMouseLeave={handleClose}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps}>
          <Box
            component={Paper}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              gap: 1,
              p: 2,
            }}
          >
            <Box>
              <Typography fontWeight={600} sx={{ mb: 1 }}>
                Header
              </Typography>
              {Array.from(Array(8), (_, x) => x).map((_, index) => (
                <Typography>{`Subheader ${index + 1}`}</Typography>
              ))}
            </Box>
            <Box>
              <Typography fontWeight={600} sx={{ mb: 1 }}>
                Header
              </Typography>
              {Array.from(Array(8), (_, x) => x).map((_, index) => (
                <Typography>{`Subheader ${index + 1}`}</Typography>
              ))}
            </Box>
            <Box
              sx={{
                p: 1,
                backgroundImage: 'url("https://loremflickr.com/640/480")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minWidth: "37%",
              }}
            ></Box>
          </Box>
        </Fade>
      )}
    </Popper>
  );
}

SubMenu.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  anchorEl: PropTypes.any,
};
