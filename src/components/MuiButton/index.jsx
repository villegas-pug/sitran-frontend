import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

import { themeInput } from 'config/muiTheme'

export default function MyButton({ variant, type, color, startIcon, onClick, children }) {
   return (
      <ThemeProvider theme={themeInput}>
         <Button
            variant={variant}
            type={type}
            color={color}
            startIcon={startIcon}
            onClick={onClick}
         >
            {children}
         </Button>
      </ThemeProvider>
   )
}
