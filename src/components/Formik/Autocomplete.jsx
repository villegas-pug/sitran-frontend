import React, { useState } from 'react'
import { Field } from 'formik'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField } from '@material-ui/core'
import _ from 'lodash'

export default function MyAutocomplete({ name, label, width, opt, setFieldValue, errors, values }) {
   const [touched, setTouched] = useState(false)
   const err = _.get(errors, name) && touched ? _.get(errors, name) : ''

   /*-> Obtiene el estado, para el binding con el componente...  */
   const entity = _.get(values, name)
   const value = entity ? Object.values(entity)[1] : ''

   return (/*-> Al ralizar el binding con `inputValue` bloquea el input... */
      <Autocomplete
         inputValue={value}
         options={opt}
         getOptionLabel={(entity) => (Object.values(entity)[1])}
         onChange={(e, entity) => setFieldValue([name], entity)}
         onBlur={() => { setTouched(true) }}
         style={{ width: `${width}rem` }}
         renderInput={(params) => (
            <Field
               {...params}
               error={Boolean(err)}
               label={label}
               as={TextField}
               variant="outlined"
               size='small'
               helperText={err}
            />
         )}
      />
   )
}
