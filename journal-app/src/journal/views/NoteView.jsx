import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteView = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={ 39 } fontWeight='light' >
          Test note Date
        </Typography>
      </Grid>
      <Grid item>
        <Button>
          <SaveOutlined sx={{ fontSize: 24, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant="filled"
          fullWidth
          placeholder="Title"
          label='Title'
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type='text'
          variant="filled"
          fullWidth
          multiline
          minRows={ 5 }
          placeholder="What do you want to share?"
          label='Description'
          sx={{ border: 'none', mb: 1 }}
        />
      </Grid>
      <ImageGalery />
    </Grid>
  )
}
