import {  Grid, Typography } from '@mui/material'

export const AuthLayout = ({ children, titlePage = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className='box-shodow'
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant='h5' >{titlePage}</Typography>
        {children}
      </Grid>
    </Grid>
  )
}
