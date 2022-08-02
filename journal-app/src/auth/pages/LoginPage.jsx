import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <AuthLayout titlePage="Login">
      <form>
        <Grid container >
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
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
              >
                <Google sx={{ mr: 1, width: '1rem' }} />
                Google login
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justifyContent='end'
        >
          <Link component={RouterLink} to='/auth/register'>
            Create an account
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
