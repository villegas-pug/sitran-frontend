import React, { useState, useEffect, useMemo } from 'react'
import {
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   FormHelperText
} from '@material-ui/core'

export default function MySelect({ name, label, width, opt, handleChangeUncontrolled, ...rest }) {
   const { setFieldValue, errors, values, isValidating } = rest

   const [touched, setTouched] = useState(false)
   const [msjError, setMsjError] = useState('')

   /*» EFFECT'S  */
   useEffect(() => {
      errors[name] && touched ? setMsjError(errors[name]) : setMsjError('')
   }, [touched])

   useEffect(() => {
      if (isValidating) {
         errors[name] ? setMsjError(errors[name]) : setMsjError('')
      }
   }, [isValidating])

   useEffect(() => {
   }, [])

   const value = useMemo(() => (values[name] ?? ''), [values[name]])

   /*» HANDLER'S  */
   const handleOnChange = ({ target: { value, name } }) => {
      setFieldValue(name, value)
      handleChangeUncontrolled({ [name]: value })
   }
   const handleOnBlur = e => { setTouched(true) }

   return (
      <FormControl variant='outlined' size='small' error={Boolean(msjError)}>
         <InputLabel>{label}</InputLabel>
         <Select
            name={name}
            label={label}
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            style={{ width: `${width}rem` }}
         >
            {
               opt.map((item, i) => (
                  <MenuItem key={i} value={Object.values(item)[0]}>{Object.values(item)[1]}</MenuItem>
               ))
            }
         </Select>
         <FormHelperText>{msjError}</FormHelperText>
      </FormControl>
   )
}