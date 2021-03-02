import { createMuiTheme } from '@material-ui/core'

export const themeRoot = createMuiTheme({
   palette: {
      primary: {
         main: '#004795'
      },
      error: {
         main: '#DD5145'
      },
   },
   typography: {
      fontFamily: 'RocknRoll One, sans-serif',
      fontSize: 11,
      h1: {
         fontWeight: 1000,
         fontSize: 18
      },
      h2: {
         fontWeight: 1000,
         fontSize: 16
      },
      h3: {
         fontWeight: 1000,
         fontSize: 14
      },

   },
   overrides: {
      MuiTextField: {
         root: {
            /* margin: 10 */
         }
      },
   },
   props: {
      MuiButton: {
         color: 'primary',
      },
   }
})

export const themeInput = createMuiTheme({
   palette: {
      primary: {
         main: '#004795'
      },
      secondary: {
         main: '#DD5145'
      },
   },
   typography: {
      fontSize: 11
   }
})