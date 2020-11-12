import React from 'react'
import { useField } from 'formik'

const MySelect = ({ width, label, opt, ...rest }) => {
   const [propsField, meta] = useField(rest)
   const err = meta.touched && meta.error ? meta.error : ''
   return (
      <FormControl variant='outlined' size='small' error={Boolean(err)}>
         <InputLabel htmlFor='select'>{label}</InputLabel>
         <Select
            {...propsField}
            label={label}
            style={{ width: `${width}rem` }}
            inputProps={{
               id: 'select',
            }}
         >
            {
               opt.map((item, i) => {
                  var values = Object.values(item)
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