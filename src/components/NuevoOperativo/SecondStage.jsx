import React, { useState, useMemo } from 'react'
import {
   FormControl,
   FormLabel,
   RadioGroup,
   Radio,
   FormControlLabel,
   FormHelperText,
   Button,
   Divider, Typography
} from '@material-ui/core'
import { Cancel, NavigateNext, NavigateBefore } from '@material-ui/icons'
import Flash from 'react-reveal/Flash'

import styled from 'styled-components'
import MyButton from 'components/MuiButton'

import useStages from 'hooks/useStages'
import SecondStageOpt02 from './SecondStageOpt02'
import SecondStageOpt01 from './SecondStageOpt01'

const Body = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: calc(100vh - 300px);
`

const Footer = styled.div`
   display: flex;
   justify-content: space-around;
`
export default function SecondStage() {

   /*» HOOK'S */
   const { handleResetStages, handlePrevStage } = useStages()
   const [tipoRegistroSelected, setTipoRegistroSelected] = useState('')
   const [componentToRender, setComponentToRender] = useState(0)

   /*» HANDLER'S  */
   const handleOnChangeRadio = ({ target: { value } }) => { setTipoRegistroSelected(value) }

   const handleRender = () => {
      setComponentToRender(parseInt(tipoRegistroSelected))
   }

   /*» COMPONENT'S ENVIROMENT  */
   const DefaultComponent = useMemo(() => (
      <Flash>
         <Body>
            <FormControl>
               <FormLabel>
                  <Typography variant="h6" color="primary">» TIPO DE REGISTRO</Typography>
               </FormLabel>
               <Divider />
               <RadioGroup name='tipoRegistro' onChange={handleOnChangeRadio} value={tipoRegistroSelected}>
                  <FormControlLabel value='1' label='Manual' control={<Radio color='default' />} disabled />
                  <FormControlLabel value='2' label='Masivo desde una hoja excel' control={<Radio color='default' />} />
               </RadioGroup>
               <FormHelperText>Seleccione para continuar...</FormHelperText>
            </FormControl>
         </Body>
         <Footer>
            <MyButton
               variant='outlined'
               color='secondary'
               startIcon={<Cancel />}
               onClick={handleResetStages}
            >
               CANCELAR
            </MyButton>
            <Button
               variant='contained'
               startIcon={<NavigateBefore />}
               onClick={handlePrevStage}
               style={{ marginLeft: 'auto', marginRight: 5 }}
            >
               REGRESAR
            </Button>
            <Button
               variant='contained'
               endIcon={<NavigateNext />}
               disabled={!tipoRegistroSelected}
               onClick={handleRender}
            >
               SIGUIENTE
            </Button>
         </Footer>
      </Flash >
   ), [tipoRegistroSelected])



   return (
      <>
         {componentToRender === 0 && DefaultComponent}
         {componentToRender === 1 && <SecondStageOpt01 />}
         {componentToRender === 2 && <SecondStageOpt02 />}
      </>
   )
}
