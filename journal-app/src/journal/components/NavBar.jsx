import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
          ml: { sm: `${drawerWidth}px` }
        }
      }}
    >
      <Toolbar>
        <IconButton
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { sm: 'none'}}}>
          <MenuOutlined />
        </IconButton>
        <Grid container 
        diraction='row'
        justifyContent='space-between'
        alignItems='center'
        >
          <Typography variant='h6' noWrap component='div'> JournalApp </Typography>
          <IconButton color='warning'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
