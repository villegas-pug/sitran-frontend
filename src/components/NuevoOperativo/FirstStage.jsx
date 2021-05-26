import React, { useMemo } from 'react'
import {
   Paper,
   Box,
   Divider,
   Button, Typography,
} from '@material-ui/core'
import { NavigateNext, Cancel } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import Flash from 'react-reveal/Flash'
import * as Yup from 'yup'

import FormGroup from 'components/Styled/FormGroup'
import MyTextField from 'components/Formik/MyTextField'
import MyAutocomplete from 'components/Formik/Autocomplete'
import MyButton from 'components/MuiButton'

import useEmpresa from 'hooks/useEmpresa'
import useOperativo from 'hooks/useOperativo'
import useDistrito from 'hooks/useDistrito'
import useStages from 'hooks/useStages'
import MySelect from 'components/Formik/MySelect'
import useBreakpoints from 'hooks/useBreakpoints'
import { useEffect } from 'react'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

const optModalidadOperativo = [
   { id: 'Presencial', description: 'Presencial' },
   { id: 'Remoto', description: 'Remoto' },
]

const useStyles = makeStyles({
   paper: {
      width: ({ currentScreen, breakpoints }) => currentScreen == breakpoints.desktop ? 700 : 600,
      padding: '12px 25px',
   },
   box: {
      flexWrap: ({ currentScreen, breakpoints }) => currentScreen == breakpoints.desktop && 'wrap',
      flexDirection: ({ currentScreen, breakpoints }) => currentScreen == breakpoints.desktop && 'row',
      justifyContent: ({ currentScreen, breakpoints }) => currentScreen == breakpoints.desktop && 'space-between'
   }
})

export default function FirstStage() {

   /*» HOOK'S STORE...  */
   const { entidadSolicitaOpeDb } = useEmpresa()
   const { inputValues, handleChangeInputControlled, handleChangeInputUncontrolled, handleInputOnReset } = useOperativo()
   const { distritoDb } = useDistrito()

   const { handleNextStage } = useStages('NuevoOperativoSubMod')

   /*» HOOKS  */
   const { currentScreen, breakpoints, unsuscribeScreenResizeListener } = useBreakpoints()
   const classes = useStyles({ currentScreen, breakpoints })

   /*» EFFECT'S  */
   useEffect(() => () => { unsuscribeScreenResizeListener() }, [])

   /*» DEPENDENCY'S  */
   const optFrm = useMemo(() => ({
      initialValues: inputValues,
      validationSchema: Yup.object({
         fechaOperativo: Yup.string().required('¡Requerido!'),
         distrito: Yup.string().required('¡Requerido!').nullable(),
         numeroOperativo: Yup.string().required('¡Requerido!'),
         modalidadOperativo: Yup.string().required('¡Requerido!'),
         /* numeroInforme: Yup.string().required('¡Requerido!'), */
         entidadSolicitaOperativo: Yup.string().required('¡Requerido!').nullable(),
      }),
      onSubmit: () => { handleNextStage() }
   }), [inputValues])

   return (
      <>
         <Formik {...optFrm} >
            {({ ...rest }) => (
               <Flash>
                  <Form
                     onChange={handleChangeInputControlled}
                  >
                     <Container>
                        <Paper elevation={5} className={classes.paper}>
                           <Typography gutterBottom variant="h4" color='primary'>NUEVO OPERATIVO</Typography>
                           <Divider style={{ marginBottom: 20 }} />
                           <Box display='flex' flexDirection='column' className={classes.box}>
                              <FormGroup>
                                 <MyTextField type='date' name='fechaOperativo' size={10} label="Fecha operativo" focused />
                              </FormGroup>
                              <FormGroup>
                                 <MyAutocomplete
                                    name='distrito'
                                    label='Distrito'
                                    width={27}
                                    opt={distritoDb}
                                    handleChangeUncontrolled={handleChangeInputUncontrolled}
                                    {...rest} />
                              </FormGroup>
                              <FormGroup>
                                 <MyTextField type='text' name='numeroOperativo' size={12} label="Número operativo" />
                              </FormGroup>

                              <FormGroup>
                                 <MySelect
                                    name='modalidadOperativo'
                                    width={25}
                                    label='Modalidad operativo'
                                    opt={optModalidadOperativo}
                                    handleChangeUncontrolled={handleChangeInputUncontrolled}
                                    {...rest}
                                 />
                              </FormGroup>
                              <FormGroup>
                                 <MyTextField type='text' name='numeroInforme' size={8} label="Número Informe" />
                              </FormGroup>
                              <FormGroup>
                                 <MyAutocomplete
                                    name='entidadSolicitaOperativo'
                                    label='Tipo Operativo'
                                    width={30}
                                    opt={entidadSolicitaOpeDb}
                                    handleChangeUncontrolled={handleChangeInputUncontrolled}
                                    {...rest} 
                                 />
                              </FormGroup>
                           </Box>
                           <Divider style={{ margin: '10px 0' }} />
                           <Box display='flex' justifyContent='space-between'>
                              <MyButton
                                 variant='outlined'
                                 type='reset'
                                 color='secondary'
                                 startIcon={<Cancel />}
                                 onClick={handleInputOnReset}
                              >
                                 CANCELAR
                              </MyButton>
                              <Button
                                 type='submit'
                                 variant='contained'
                                 startIcon={<NavigateNext />}
                              >
                                 SIGUIENTE
                              </Button>
                           </Box>
                        </Paper>
                     </Container>
                  </Form>
               </Flash>
            )}
         </Formik>
      </>
   )
}
