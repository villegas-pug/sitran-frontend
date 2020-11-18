import React from 'react'
import { useField } from 'formik'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'

export default function MySelect({ width, label, opt, ...rest }) {
   const [propsField, meta] = useField(rest)
   const err = meta.touched && meta.error ? meta.error : ''
   return (
      <FormControl variant='outlined' size='small' error={Boolean(err)}>
         <InputLabel>{label}</InputLabel>
         <Select
            {...propsField}
            label={label}
            style={{ width: `${width}rem` }}
         >
            {
               opt.map((item, i) => {
                  let values = Object.values(item)
                  return (
                     <MenuItem key={i} value={values[0]}>{values[1]}</MenuItem>
                  )
               })
            }
         </Select>
         <FormHelperText>{err}</FormHelperText>
      </FormControl>
   )
}