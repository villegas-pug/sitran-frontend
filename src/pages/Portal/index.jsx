import React from 'react'
import {
   Paper,
   Typography,
   Box,
   Grid,
   Button,
   InputAdornment,
   CircularProgress
} from '@material-ui/core'
import { 
   LockOpen,
   AccountCircle,
   VisibilityOff,
   Build,
   NewReleases
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import MyTextField from 'components/Formik/MyTextField'
import useAuth from 'hooks/useAuth'

const useStyle = makeStyles({
   portal:{
      width: 300
   },
   paper: {
      padding: 15,
      /* transform: 'rotateY(-15deg)', */
   },
   divider:{
      marginBottom: 20
   },
   textField:{
      letterSpacing: 1,
   }
})

const Body = styled.body`
   height: 97vh;
   display: flex;
   justify-content: center;
   align-items: center;
   /* perspective: 500; */
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
                           <Grid container spacing={2} className={classes.portal}>
                              <Grid item xs={12}>
                                 <Typography 
                                    paragraph 
                                    variant='h2' 
                                    color='primary'
                                    align='center'
                                 >
                                       Sistema integral de Dirección Técnica y Fiscalización Migratoria
                                 </Typography>
                                 <Box height={70}>
                                    <MyTextField
                                       fullWidth
                                       name='login'
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
                                 </Box>
                                 <Box height={70}>
                                    <MyTextField
                                       fullWidth 
                                       type='password' 
                                       name='password' 
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
                                 </Box>
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
                                 <Box display='flex' justifyContent='space-between' mt={1}>
                                    <Button 
                                       variant='text'
                                       startIcon={<Build color='action' fontSize='small'/>}
                                    >
                                       <Typography variant='h6' color='textSecondary'>Requisitos del sistema</Typography>
                                    </Button>
                                    <Button 
                                       variant='text'
                                       startIcon={<NewReleases color='action' fontSize='small'/>}
                                    >
                                       <Typography variant='h6' color='textSecondary'>Manual de usuario</Typography>
                                    </Button>
                                 </Box>
                              </Grid>
                           </Grid>
                        </Paper>
                     </Form>
                  )
               }
            </Formik>
         </Body>
      </Fade>
   )
}