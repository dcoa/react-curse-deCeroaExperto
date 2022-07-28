import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const defaultTheme = createTheme({
    pallete: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})


