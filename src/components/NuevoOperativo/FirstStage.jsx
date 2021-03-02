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

const optTipoOperativo = [
   { id: 'Presencial', description: 'Presencial' },
   { id: 'Remoto', description: 'Remoto' },
]

const useStyles = makeStyles({
   paper: {
      width: ({ screen, breakpoints }) => screen == breakpoints.desktop ? 700 : 600,
      padding: '12px 25px',
   },
   box: {
      flexWrap: ({ screen, breakpoints }) => screen == breakpoints.desktop && 'wrap',
      flexDirection: ({ screen, breakpoints }) => screen == breakpoints.desktop && 'row',
      justifyContent: ({ screen, breakpoints }) => screen == breakpoints.desktop && 'space-between'
   }
})

export default function FirstStage() {

   /*» HOOK'S STORE...  */
   const { entidadSolicitaOpeDb } = useEmpresa()
   const { inputValues, handleChangeInputControlled, handleChangeInputUncontrolled, handleInputOnReset } = useOperativo()
   const { distritoDb } = useDistrito()

   const { handleNextStage } = useStages('NuevoOperativoSubMod')

   /*» HOOKS  */
   const { screen, breakpoints, unsuscribeScreenResizeListener } = useBreakpoints()
   const styles = useStyles({ screen, breakpoints })

   /*» EFFECT'S  */
   useEffect(() => () => { unsuscribeScreenResizeListener() }, [])

   /*» DEPENDENCY'S  */
   const optFrm = useMemo(() => ({
      initialValues: inputValues,
      validationSchema: Yup.object({
         fechaOperativo: Yup.string().required('¡Requerido!'),
         distrito: Yup.string().required('¡Requerido!').nullable('¡Requerido!'),
         numeroOperativo: Yup.string().required('¡Requerido!'),
         tipoOperativo: Yup.string().required('¡Requerido!'),
         numeroInforme: Yup.string().required('¡Requerido!'),
         entidadSolicitaOperativo: Yup.string().required('¡Requerido!').nullable('¡Requerido!'),
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
                        <Paper elevation={5} className={styles.paper}>
                           <Typography variant="h6" color='initial'>» NUEVO OPERATIVO</Typography>
                           <Divider style={{ marginBottom: 20 }} />
                           <Box display='flex' flexDirection='column' className={styles.box}>
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
                                    name='tipoOperativo'
                                    width={25}
                                    label='Tipo operativo'
                                    opt={optTipoOperativo}
                                    handleChangeUncontrolled={handleChangeInputUncontrolled}
                                    {...rest}
                                 />
                              </FormGroup>
                              <FormGroup>
                                 <MyTextField type='text' name='numeroInforme' size={8} label="#Informe" />
                              </FormGroup>
                              <FormGroup>
                                 <MyAutocomplete
                                    name='EntidadSolicitaOperativo'
                                    label='¿Quién solicita operativo?'
                                    width={30}
                                    opt={entidadSolicitaOpeDb}
                                    handleChangeUncontrolled={handleChangeInputUncontrolled}
                                    {...rest} />
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
