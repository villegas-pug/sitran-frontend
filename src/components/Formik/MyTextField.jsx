import React from 'react'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'

export default function MyTextField({ type, size, label, focused, ...rest }) {
   const [fieldProps, meta] = useField(rest)
   const err = (meta.touched && meta.error) ? meta.error : ''

   return (
      <TextField
         {...fieldProps}
         type={type}
         color='primary'
         variant='outlined'
         size='small'
         autoFocus={!!focused}
         style={{ width: `${size}rem` }}
         label={label}
         error={Boolean(err)}
         InputLabelProps={{
            shrink: type === 'date' || meta.value && true
         }}
         helperText={err}
         autoComplete='off'
      />
   )
}
