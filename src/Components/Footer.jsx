import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  BottomNavigation,
  BottomNavigationAction,
  ButtonGroup,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import FooterLogo from "../assets/images/FooterLogo.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Footer() {
  return (
    <Card
      sx={{
        maxHeight: 380,
        backgroundColor: "#0059BC",
        color: "white",
      }}
    >
      <Grid
        container
        display={"flex"}
        justifyContent="space-around"
        alignItems={"center"}
        sx={{ padding: 5 }}
      >
        <Grid item display={"flex"} direction="column">
          <CardMedia
            src={FooterLogo}
            component="img"
            sx={{ objectFit: "contain", width: "170px" }}
            alt="Paella dish"
          ></CardMedia>
          <CardContent
            sx={{ paddingInline: 0, maxWidth: 400, marginBottom: "20px" }}
          >
            <Typography
              sx={{
                fontSize: 14,
                textOverflow: "ellipsis",
                whiteSpace: "pre-line",
              }}
              gutterBottom
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              suscipit voluptatem illo eligendi alias, voluptatum quia harum
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              padding: 0,
            }}
          >
            <TextField
              id="outlined-basic"
              placeholder="Email"
              InputProps={{
                sx: {
                  paddingTop: "5px",
                  "&>input": { paddingTop: "5px" },
                },
              }}
              variant="filled"
              size="small"
              sx={{
                color: "black",
                backgroundColor: "white",
                borderColor: "white",
              }}
            />

            <Button
              size="small"
              sx={{
                color: "white",
                background: "#00254F",
                padding: "8px",
                borderRadius: "0",
              }}
            >
              Sign Up
            </Button>
          </CardActions>
        </Grid>
        <Grid item>
          <Typography variant="h6">Title</Typography>
          <List sx={{ width: "100%", maxWidth: 360 }}>
            {[1, 2, 3, 4].map((value) => (
              <ListItem
                key={value}
                disableGutters
                sx={{ paddingTop: 0, paddingBottom: "3px" }}
              >
                <ListItemText primary={`Line item ${value}`} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          <Typography variant="h6">Title</Typography>
          <List sx={{ width: "100%", maxWidth: 360 }}>
            {[1, 2, 3, 4].map((value) => (
              <ListItem
                key={value}
                disableGutters
                sx={{ paddingTop: 0, paddingBottom: "3px" }}
              >
                <ListItemText primary={`Line item ${value}`} />
              </ListItem>
            ))}
          </List>
        </Grid>{" "}
        <Grid item>
          <Typography variant="h6">Title</Typography>
          <List sx={{ width: "100%", maxWidth: 360 }}>
            {[1, 2, 3, 4].map((value) => (
              <ListItem
                key={value}
                disableGutters
                sx={{ paddingTop: 0, paddingBottom: "3px" }}
              >
                <ListItemText primary={`Line item ${value}`} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Divider sx={{backgroundColor:'white'}} />

      <BottomNavigation
        sx={{
          justifyContent: "space-around",
          backgroundColor: "#0059BC",
          color: "white",
          alignItems: "center",
        }}
      >
        <Typography>contact@nttdata.com</Typography>
        <Typography>+3 9876 765 444</Typography>

        <ButtonGroup size="small" aria-label="small button group">
          <IconButton>
            <FacebookIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon sx={{ color: 'white' }} />
          </IconButton>
        </ButtonGroup>
      </BottomNavigation>
    </Card>
  );
}
