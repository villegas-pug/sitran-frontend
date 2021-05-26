import { createMuiTheme } from '@material-ui/core'

export const rootTheme = createMuiTheme({
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
      fontSize: 10,
      h1: {
         fontWeight: 1000,
         fontSize: 16
      },
      h2: {
         fontWeight: 1000,
         fontSize: 14
      },
      h3: {
         fontWeight: 1000,
         fontSize: 12
      },
      h4:{
         fontWeight: 1000,
         fontSize: 10
      },
      h5:{
         fontWeight: 1000,
         fontSize: 8
      },
      h6:{
         fontWeight: 500,
         fontSize: 10
      },
   },
   overrides: {
      MuiTextField: {
         root: {
            fontSize: 10
         }
      },
   },
   props: {
      MuiButton: {
         color: 'primary',
      },
   }
})

export const inputTheme = createMuiTheme({
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