import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hook'
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth/'
import { useDispatch } from 'react-redux'


export const LoginPage = () => {

  const dispatch = useDispatch()
  const { email, password, onInputChange } = useForm({
    email: 'example@example.com',
    password: '1234'
  })

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch( checkingAuthentication(email, password) )
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSingIn() )


  }
  return (
    <AuthLayout titlePage="Login">
      <form onSubmit={ onSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="e-mail"
              type="email"
              placeholder="email@example.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}  >
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
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
                type='submit'
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
                onClick={ onGoogleSignIn }
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
