import { AuthLayout } from "../layout/AuthLayout"
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout titlePage="Register">
      <form>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Full name"
              type="text"
              placeholder="John Doe"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="e-mail"
              type="email"
              placeholder="email@example.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}  >
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
            />
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} >
              <Button
                variant='contained'
                fullWidth
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justifyContent='end'
        >
          <Link component={RouterLink} to='/auth/login'>
            Log in
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
