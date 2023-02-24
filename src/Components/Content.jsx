import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import CardComponent from './CardComponent'

function Content() {
  return (
      <Grid container padding={'1rem 7rem;'} display={'flex'} flexWrap={'wrap'}>
          <Grid item xs={12} >
              <Grid container  display={'flex'} justifyContent={'space-between'}>
                  <Grid item>
                      <Typography variant="h4">Title</Typography>
                  </Grid>
                  <Grid item>
                      <Box display={'flex'} gap={1} alignItems={'center'}>
                          <IconButton>
                              <FavoriteBorderOutlined/>
                          </IconButton>
                          <Typography>0 Ürün</Typography>
                          <Button variant="contained" >Beğenilenler</Button>

                      </Box>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12} marginTop={2}>
              <Grid container display={'flex'} gap={2} justifyContent={'space-between'} flexWrap={'wrap'}>
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
              </Grid>

          </Grid>
          <Grid item xs={12} marginTop={4} textAlign={'center'}>
          <Button variant="contained" >Daha Fazla</Button>
          </Grid>
</Grid>
    )
}

export default Content