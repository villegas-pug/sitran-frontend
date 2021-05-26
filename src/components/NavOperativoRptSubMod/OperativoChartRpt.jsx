import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { 
   FilterList, 
   Restore,
   SkipNext,
   SkipPrevious,
   Home,
   RotateLeft
} from '@material-ui/icons'
import {
   FormControl,
   FormHelperText,
   ButtonGroup,
   Button,
   Select,
   MenuItem,
   Typography, 
   Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'


import SpeedDials from 'components/SpeedDial'
import Dashboard, { DashboardContent, DashboardFilter } from 'components/DashboardCharts'
import ChartByOpe from 'components/ChartsOperativo/ChartByQuantity'
import ChartByNacionalidad from 'components/ChartsOperativo/ChartByNacionalidad'
import ChartBySexo from 'components/ChartsOperativo/ChartBySexo'
import ChartByOpeAnual from 'components/ChartsOperativo/ChartByOpeAnual'
import ChartByIntervenidos from 'components/ChartsOperativo/ChartByIntervenidos'
import ChartByDisposicionPNP from 'components/ChartsOperativo/ChartByDisposicionPNP'
import ChartByRefugiados from 'components/ChartsOperativo/ChartByRefugiados'
import ChartByTipoInfraccion from 'components/ChartsOperativo/ChartByTipoInfraccion'
import ChartByTipoOpe from 'components/ChartsOperativo/ChartByTipoOpe'

import useOperativo from 'hooks/useOperativo'
import useDistrito from 'hooks/useDistrito'
import ChartByModalidad from 'components/ChartsOperativo/ChartByModalidad'

const optAñoOpe = [
   { key: ' ', label: '-Todos-' },
   { key: 2019, label: 2019 },
   { key: 2020, label: 2020 },
   { key: 2021, label: 2021 },
]

const optSexo = [
   { key: ' ', label: '-Ambos-' },
   { key: 'MASCULINO', label: 'Masculino' },
   { key: 'FEMENINO', label: 'Femenino' }
]

const useStyle = makeStyles({
   formControl:{
      marginTop: 20
   },
   select:{
      fontSize: 8,
      color: '#999'
   },
   menuItem: {
      fontWeight: 1000,
      fontSize: 8
   },
   iconButton:{
      width: 50,
      height: 50,
      display: 'inline-block'
   },
   buttonGroup:{
      marginTop: 5,
      marginBottom: 15
   }
})

const CommonBodyOfDashboard = styled.body`
   height: 100%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-gap: 1rem;
`

const FirstBodyOfDashboard = styled(CommonBodyOfDashboard)``

const SecondBodyOfDashboard = styled(CommonBodyOfDashboard)`
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(2, 1fr);
`

const FIRST_STAGE = 1
const SECOND_STAGE = 2

const initialValues = {
   añoOpe: ' ',
   sexo: ' ',
   distrito: ''
}

export default function OperativoChartRpt({handleCurrentNav}){

   /*» HOOK'S */
   const [inputsFilter, setInputsFilter] = useState(initialValues)
   const [currentStage, setCurrentStage] = useState(FIRST_STAGE)

   /*» CUSTOM HOOKS'S  */
   const classes = useStyle()
   const {
      opePivotedDb,
      opePivotedByNacionalidadDb,
      opePivotedBySexoDb,
      opePivotedByModalidadDb,
      opeAnualPivotedDb,
      intervenidosPivotedDb,
      tipoInfraccionPivotedDb,
      tipoOpePivotedDb,
      handleFindAllOpeAnualPivoted,
      handleFindAllOpePivoted,
      handleFindOpePivotedByNacionalidad,
      handleFindOpePivotedBySexo,
      handleFindOpePivotedByModalidad,
      handleFindAllIntervenidosPivoted,
      handleFindTipoInfraccionPivoted,
      handleFindTipoOpePivoted
   } = useOperativo()

   const { distritoDb } = useDistrito()


   /*» EFFECT'S  */
   useEffect(() => { handleFindAllOpePivoted() }, [])
   useEffect(() => { handleFindAllOpeAnualPivoted() }, [])
   useEffect(() => { handleFindOpePivotedBySexo(inputsFilter) }, [inputsFilter])
   useEffect(() => { handleFindOpePivotedByModalidad(inputsFilter) }, [inputsFilter])
   useEffect(() => { handleFindOpePivotedByNacionalidad(inputsFilter) }, [inputsFilter])
   useEffect(() => { handleFindAllIntervenidosPivoted(inputsFilter) }, [inputsFilter])
   useEffect(() => { handleFindTipoInfraccionPivoted(inputsFilter) }, [inputsFilter])
   useEffect(() => { handleFindTipoOpePivoted(inputsFilter) }, [inputsFilter])

   /*» HANDLER'S  */
   const handleChangeFilter = ({target: { name, value }}) => {setInputsFilter({ ...inputsFilter, [name]: value })}
   const handleUpdateNav = (nav) => { handleCurrentNav(nav) }
   const handleUpdateStage = (stage) => { setCurrentStage(stage) }
   const handleResetFilter = () => { setInputsFilter({...initialValues}) }

   /*» DEPENDENCY'S  */
   const optSpeedDialAction = useMemo(() => ([
      {
         icon: <Restore fontSize='large' />,
         tooltip: 'Actualizar',
         handleOnClick: () => {
            handleFindAllOpeAnualPivoted()
            handleFindAllOpePivoted()
            handleFindAllIntervenidosPivoted(inputsFilter)
            handleFindTipoInfraccionPivoted(inputsFilter)
            handleFindTipoOpePivoted(inputsFilter)
            handleFindOpePivotedBySexo(inputsFilter)
            handleFindOpePivotedByModalidad(inputsFilter)
            handleFindOpePivotedByNacionalidad(inputsFilter)
         }
      }
   ]), [inputsFilter])

   return (
      <>
         <Dashboard>
            <DashboardFilter>
               <ButtonGroup color='primary' variant='contained' className={classes.buttonGroup}>
                  <Button
                     color='primary'
                     onClick={() => handleUpdateNav(null)}
                     className={classes.button}
                     startIcon={<Home fontSize='large' />}
                  />
                  <Button
                     color='primary'
                     onClick={() => handleResetFilter()}
                     className={classes.button}
                     endIcon={<RotateLeft fontSize='large' />}
                  />
               </ButtonGroup>
               <ButtonGroup 
                  color='inherit' 
                  variant='contained'
                  className={classes.buttonGroup}
               >
                  <Button
                     disabled={currentStage === FIRST_STAGE ? true : false}
                     startIcon={<SkipPrevious fontSize='large' />}
                     onClick={() => handleUpdateStage(FIRST_STAGE)} 
                  />
                  <Button 
                     disabled={currentStage === SECOND_STAGE ? true : false}
                     endIcon={<SkipNext fontSize='large' />} 
                     onClick={() => handleUpdateStage(SECOND_STAGE)} 
                  />
               </ButtonGroup>
               <Button 
                  fullWidth 
                  size='small'
                  color='inherit'
                  className={classes.select}
                  startIcon={<FilterList />}
               >
                  <Typography variant="h4" color="textSecondary">Filtro</Typography>
               </Button>
               <Divider />

               <FormControl className={classes.formControl}>
                  <Select
                     color='primary'
                     name='añoOpe'
                     value={inputsFilter.añoOpe}
                     defaultValue={optAñoOpe[0].key}
                     className={classes.select}
                     onChange={handleChangeFilter}
                  >
                     {
                        optAñoOpe.map(({key, label}) => (
                           <MenuItem 
                              className={classes.menuItem} 
                              key={label}
                              value={key}
                           >
                              {label}
                           </MenuItem>
                        ))
                     }
                  </Select>
                  <FormHelperText>Año operativo</FormHelperText>
               </FormControl>
               <FormControl className={classes.formControl}>
                  <Select
                     name='sexo'
                     color='primary'
                     value={inputsFilter.sexo}
                     defaultValue={optSexo[0].key}
                     className={classes.select}
                     onChange={handleChangeFilter}
                  >
                     {
                        optSexo.map(({key, label}) => (
                           <MenuItem className={classes.menuItem} key={label} value={key}>{label}</MenuItem>
                        ))
                     }
                  </Select>
                  <FormHelperText>Sexo</FormHelperText>
               </FormControl>
               <FormControl className={classes.formControl}>
                  <Select
                     name='distrito'
                     color='primary'
                     value={inputsFilter.distrito}
                     className={classes.select}
                     onChange={handleChangeFilter}
                  >
                     {
                        distritoDb.map(({idDistrito, nombre}) => (
                           <MenuItem className={classes.menuItem} key={idDistrito} value={nombre}>{nombre}</MenuItem>
                        ))
                     }
                  </Select>
                  <FormHelperText>Distrito</FormHelperText>
               </FormControl>
            </DashboardFilter>

            <DashboardContent>
               {
                  currentStage === FIRST_STAGE
                     ? <FirstBodyOfDashboard>
                        <ChartByOpeAnual title='OPERATIVOS ANUALES' data={opeAnualPivotedDb} />
                        <ChartByOpe title='OPERATIVOS MENSUALES' data={opePivotedDb} />
                        <ChartByIntervenidos title='INTERVENIDOS' data={intervenidosPivotedDb} />
                        <ChartByDisposicionPNP title='PUESTOS A DISPOSICIÓN PNP' data={intervenidosPivotedDb} />
                        <ChartByRefugiados title='REFUGIADOS' data={intervenidosPivotedDb} />
                        <ChartByNacionalidad title='INTERVENIDOS POR NACIONALIDAD' data={opePivotedByNacionalidadDb} />
                        <ChartBySexo title='INTERVENIDOS POR SEXO' data={opePivotedBySexoDb} />
                     </FirstBodyOfDashboard>
                     :<SecondBodyOfDashboard>
                        <ChartByTipoInfraccion title='POR INFRACCION MIGRATORIA' data={tipoInfraccionPivotedDb} />
                        <ChartByTipoOpe title='POR TIPO OPERATIVO' data={tipoOpePivotedDb} />
                        <ChartByModalidad title='POR MODALIDAD OPERATIVO' data={opePivotedByModalidadDb} />
                     </SecondBodyOfDashboard>
               }
            </DashboardContent>

         </Dashboard>

         {/*» FLOAT...  */}
         <SpeedDials
            direction='right'
            optSpeedDialAction={optSpeedDialAction}
            position='absolute'
            opt={{
               bottom: 5,
               left: 5
            }}
         />
      </>
   )
}

OperativoChartRpt.propTypes = {
   handleCurrentNav: PropTypes.func.isRequired
}