
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material/';
import { defaultTheme } from './theme'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
