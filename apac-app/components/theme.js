import createTheme from 'react-storefront/theme/createTheme'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      // main: '#202020',
    },
    secondary: {
      main: '#19857b',
      // main: '#F9F9F9',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {},
})

export default theme
