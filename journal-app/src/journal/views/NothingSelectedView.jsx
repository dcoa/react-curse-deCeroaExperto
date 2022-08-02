import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 2, boxShadow: '5px 14px 30px 0px rgba(0,0,0,0.35)'}}
    >
      <Grid item xs={ 12 } >
        <StarOutline sx={{ fontSize: 100, color: 'white' }}/>
      </Grid>
      <Grid item xs={ 12 } >
        <Typography color='white' variant="h5" align='center'>Create a new note or select one</Typography>
      </Grid>
    </Grid>
  )
}
