import React from 'react'

import {
   Paper,
   Typography,
   Box,
   Divider,
   Button,
   InputAdornment,
   CircularProgress
} from '@material-ui/core'
import { 
   LockOpen,
   AccountCircle,
   VisibilityOff,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import MyTextField from 'components/Formik/MyTextField'
import useAuth from 'hooks/useAuth'

const useStyle = makeStyles({
   paper: {
      padding: 10,
      transform: 'rotateY(-15deg)',
   },
   divider:{
      marginBottom: 20
   },
   textField:{
      letterSpacing: 2,
   }
})

const Body = styled.body`
   height: 97vh;
   display: flex;
   justify-content: center;
   align-items: center;
   perspective: 500;
`

const FormGroup =styled.div`
   height: 4rem;
`

export default function Portal() {

   /*» HOOK'S  */
   const classes = useStyle()
   const { authLoading, handleLogin } = useAuth()

   /*» DEPENDENCY'S  */
   const optForm = {
      initialValues: {
         login: '',
         password: ''
      },
      validationSchema: Yup.object({
         login: Yup.string().required('¡Ingrese un usuario!'),
         password: Yup.string().required('¡Ingrese una contraseña!')
      }),
      onSubmit: (cred) => {handleLogin(cred)}
   }

   return (
      <Fade delay={500} duration={1500}>
         <Body>
            <Formik
               {...optForm}
            >
               {
                  () => (
                     <Form>
                        <Paper elevation={10} className={classes.paper}>
                           <Box display='flex' flexDirection='column'>
                              <Typography gutterBottom variant='h3' color='primary'>Portal de ingreso</Typography>
                              <Divider className={classes.divider} />
                              <FormGroup>
                                 <MyTextField 
                                    name='login' 
                                    size={15} 
                                    label='usuario'
                                    InputProps={{
                                       endAdornment: (
                                          <InputAdornment position='end'>
                                             <AccountCircle color='action' />
                                          </InputAdornment>
                                       ),
                                    }}
                                    focused
                                    className={classes.textField}
                                 />
                              </FormGroup>
                              <FormGroup>
                                 <MyTextField 
                                    type='password' 
                                    name='password' 
                                    size={15} 
                                    label='contraseña'
                                    InputProps={{
                                       endAdornment: (
                                          <InputAdornment position='end'>
                                             <VisibilityOff color='action' />
                                          </InputAdornment>
                                       ),
                                    }}
                                    className={classes.textField}
                                 />
                              </FormGroup>
                              <Button
                                 fullWidth
                                 disabled={authLoading}
                                 type='submit'
                                 variant='contained'
                                 startIcon={ 
                                    authLoading
                                       ? <CircularProgress size={20} color='inherit' />
                                       : <LockOpen fontSize='large' /> 
                                 }
                              >
                                 <Typography variant='h4' color='initial'>INGRESAR</Typography>
                              </Button>
                           </Box>
                        </Paper>
                     </Form>
                  )
               }
            </Formik>
         </Body>
      </Fade>
   )
}