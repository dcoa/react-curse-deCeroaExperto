import { useState } from "react"
import { useForm } from "../../hook"
import { AuthLayout } from "../layout/AuthLayout"
import { Button, Grid, Link, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { startSignUp } from "../../store/auth"

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  displayName: [(value)=> value.length >= 1, 'This fild is required'],
  email: [(value)=> value.includes('@'), 'Send a valid email'],
  password: [(value)=> value.length >= 6, 'Your password need at last 6 characters'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setformSubmitted] = useState(false)
  const {formState, displayName, email, password, 
    isFormValid, displayNameValid, emailValid, passwordValid,
    onInputChange } = useForm(formData,formValidations)

  const onSubmit = ( event ) => {
    event.preventDefault()
    setformSubmitted(true)
    console.log(isFormValid, displayNameValid, emailValid, passwordValid)
    if(!isFormValid) return;
    dispatch(startSignUp(formState))

  }

  return (
    <AuthLayout titlePage="Register">
      <form onSubmit={onSubmit}>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Full name"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="e-mail"
              type="email"
              placeholder="email@example.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
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
              error={!!passwordValid && formSubmitted }
              helperText={ passwordValid }
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
                type="submit"
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
