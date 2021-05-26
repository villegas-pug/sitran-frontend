import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
   Box,
   Paper, 
   Typography,
   Divider,
   InputAdornment
} from '@material-ui/core'
import {
   AccountCircle,
   VisibilityOff
} from '@material-ui/icons'
import { Formik, Form } from 'formik'

import MyFormGroup from 'components/Styled/FormGroup'
import MyTextField from 'components/Formik/MyTextField'


const useStyle = makeStyles({
   paper: {
      padding: 10,
      width: 280,
   },
   divider: {
      marginBottom: 20
   }
})

export default function PerfilMod(){
   /*» HOOK'S  */
   const classes = useStyle()
   
   /*» HANDLER'S  */

   return (
      <Box display='flex' height='85%' justifyContent='center' alignItems='center'>
         <Formik>
            {
               () => (
                  <Form>
                     <Paper elevation={1} className={classes.paper}>
                        <Typography 
                           gutterBottom
                           variant='h5' 
                           color='primary' 
                        >
                              ACTUALIZAR CREDENCIALES
                        </Typography>
                        <Divider className={classes.divider}/>
                        
                        <MyFormGroup>
                           <MyTextField 
                              name='user' 
                              size={15}
                              label='Usuario'
                              focused
                              disabled
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position='start'>
                                       <AccountCircle />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </MyFormGroup>
                        <MyFormGroup>
                           <MyTextField 
                              name='password' 
                              size={15} 
                              label='Contraseña' 
                              focused 
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position='start'>
                                       <VisibilityOff />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </MyFormGroup>
                        <MyFormGroup>
                           <MyTextField 
                              name='repeatPassword' 
                              size={15} 
                              label='Repetir contraseña'
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position='start'>
                                       <VisibilityOff />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </MyFormGroup>
                     </Paper>
                  </Form>         
               )
            }
         </Formik>
      </Box>
   )
}
