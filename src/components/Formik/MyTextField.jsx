import React from 'react'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'

export default function MyTextField({ type, size, label, ...rest }) {
   const [propsField, meta] = useField(rest)
   const err = (meta.touched && meta.error) ? meta.error : ''
   return (
      <TextField
         {...propsField}
         type={type}
         variant='outlined'
         size='small'
         style={{ width: `${size}rem` }}
         label={label}
         error={Boolean(err)}
         InputLabelProps={{
            shrink: true
         }}
         helperText={err}
         autoComplete='off'
      />
   )
}
