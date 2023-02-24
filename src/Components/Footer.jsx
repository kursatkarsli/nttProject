import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";
import FooterLogo from '../assets/images/FooterLogo.png';

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
    <Card sx={{ maxHeight: 400, backgroundColor: "#0059BC", color: "white" }}>
      <Grid container display={'flex'} justifyContent='space-around' alignItems={'center'}>
        <Grid item>
          <CardMedia
            height="194"
            width={170}
            src={FooterLogo}
            component="img"
            sx={{objectFit:'contain'}}
            alt="Paella dish"
          ></CardMedia>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Grid>
        <Grid item>
       asdasasds
        </Grid>
        <Grid item>
        asdadadas
        </Grid>
        <Grid item>
      asdasda
        </Grid>
      </Grid>
    </Card>
  );
}
