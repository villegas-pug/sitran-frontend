import React, { useState, useEffect } from 'react'
import {
   TreeView,
   TreeItem,
} from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { 
   Remove, 
   Add,
   GetApp
} from '@material-ui/icons'
import { 
   Box,
   IconButton,
   Tooltip,
   Paper,
   Divider,
   Typography
} from '@material-ui/core'
import styled from 'styled-components'
import uuid from 'short-uuid'
import { Scrollbars } from 'react-custom-scrollbars'
import Fade from 'react-reveal/Fade'

import useNacionalizacion from 'hooks/useNacionalizacion'
import ModalLoader from 'components/Styled/ModalLoader'
import MyAppTitle from 'components/Styled/AppTitle'

const hPapper = '70vh'
const wPapper = '85vw'

const Body = styled.body`
   height: calc(100% - 5rem);
   display: flex;
   justify-content: center;
   align-items: center;
`

const useStyle = makeStyles({
   paper: {
      padding: '1rem 3rem',
   },
   divider: {
      marginBottom: 15
   },
   dividerTree: {
      /* marginTop: 2,
      marginBottom: 2 */
   },
   treeView: {
      height: hPapper,
      width: wPapper,
   },
   typographyRoot:{
      fontSize: 27
   },
   iconButton: {
      height: 30,
      width: 30,
   }
})

const scrollbarsStyle = {
   height: hPapper,
   width: wPapper,
}

export default function NacionalizacionRptSubMod() {
   
   /*» HOOK'S */
   const [expanded, setExpanded] = useState([])
   const [selected, setSelected] = useState([])

   /*» CUSTOM-HOOK'S  */
   const classes = useStyle()
   const {
      procnacDbLoading,
      tipoProcNacDistinct,
      etapaProcNacDistinct,
      añoProcNacDistinct,
      filterProcNacByAñoAndTipoProc,
      filterProcNacByAñoAndTipoProcAndEtapa,
      mapCountProcNacByAño,
      handleToListProcPNac,
      handleDownloadProcByCustomFilter
   } = useNacionalizacion()

   /*» EFFECT'S  */
   useEffect(() => { handleToListProcPNac() }, [])

   /*» HANDLER'S  */
   const handleToggle = (e, idItem) => { setExpanded(idItem) }
   const handleSelected = (e, idItem) => { setSelected(idItem) }

   /*» RENDERING CONDITIONAL  */
   if(procnacDbLoading) return <ModalLoader />

   return (
      <Body>
         <Fade>
            <Paper variant='outlined' className={classes.paper}>
               <MyAppTitle name='» TRÁMITES PENDIENTES DE NACIONALIZACIÓN' align='left' size={.9} color='#000' />
               <Divider className={classes.divider} />
               <Scrollbars autoHide style={scrollbarsStyle}>
                  <TreeView
                     expanded={expanded}
                     selected={selected}
                     defaultCollapseIcon={<Remove fontSize='large' />}
                     defaultExpandIcon={<Add fontSize='large' />}
                     className={classes.treeView}
                     onNodeToggle={handleToggle}
                     onNodeSelect={handleSelected}
                  >
                     {
                        [...añoProcNacDistinct].map((año) => (
                           <>
                              <TreeItem
                                 key={año} 
                                 nodeId={año}
                                 label={
                                    <Box m={1} display='flex' justifyContent='space-between'>
                                       <Box>
                                          <Typography 
                                             variant='h1' 
                                             color='textSecondary' 
                                             className={classes.typographyRoot}
                                          >
                                             {año}
                                          </Typography>
                                          <Typography 
                                             variant='h4' 
                                             color='error'
                                          >
                                             PENDIENTES: {mapCountProcNacByAño[año].toString().padStart(4, '0')}
                                          </Typography>
                                       </Box>
                                       <Tooltip title='Descargar' placement='right-start' arrow>
                                          <IconButton 
                                             onClick={() => handleDownloadProcByCustomFilter({año})}
                                          >
                                             <GetApp />
                                          </IconButton>
                                       </Tooltip>
                                    </Box>
                                 }
                              >
                                 {
                                    [...tipoProcNacDistinct].map((tipo) => (
                                       filterProcNacByAñoAndTipoProc(año, tipo)
                                          .map(({nro, tipoTramite, contarPendiente}) => (
                                             <TreeItem 
                                                key={nro}
                                                nodeId={nro}
                                                label={
                                                   <Box 
                                                      p={1} 
                                                      display='flex' 
                                                      justifyContent='space-between'
                                                   >
                                                      <Box 
                                                         display='flex' 
                                                         alignItems='center' 
                                                         justifyContent='space-between' 
                                                         width={370}
                                                      >
                                                         <Typography 
                                                            variant='h5' 
                                                            color='textPrimary'
                                                         >
                                                            {tipoTramite}
                                                         </Typography>
                                                         <Typography 
                                                            variant='h5' 
                                                            color='error'
                                                         >
                                                            P: {contarPendiente.toString().padStart(3, '0')}
                                                         </Typography>
                                                      </Box>
                                                      <Tooltip title='Descargar'  placement='right-start' arrow>
                                                         <IconButton 
                                                            className={classes.iconButton}
                                                            onClick={() => handleDownloadProcByCustomFilter({año, tipo})}
                                                         >
                                                            <GetApp />
                                                         </IconButton>
                                                      </Tooltip>
                                                   </Box>
                                                }
                                             >
                                                {
                                                   [...etapaProcNacDistinct].map(etapa => (
                                                      filterProcNacByAñoAndTipoProcAndEtapa(año, tipo, etapa)
                                                         .map(({nro, etapaTramite, contarPendiente}) => (
                                                            <TreeItem 
                                                               key={nro}
                                                               nodeId={uuid.generate()}
                                                               label={
                                                                  <Box 
                                                                     p={1} 
                                                                     display='flex' 
                                                                     justifyContent='space-between'
                                                                  >
                                                                     <Box 
                                                                        display='flex' 
                                                                        alignItems='center' 
                                                                        justifyContent='space-between' 
                                                                        width={270}
                                                                     >
                                                                        <Typography variant='h5' color='textPrimary'>{etapaTramite}</Typography>
                                                                        <Typography variant='h6' color='error'>P: {contarPendiente.toString().padStart(3, '0')}</Typography>
                                                                     </Box>
                                                                     <Tooltip title='Descargar'  placement='right-start' arrow>
                                                                        <IconButton 
                                                                           className={classes.iconButton}
                                                                           onClick={() => handleDownloadProcByCustomFilter({año, tipo, etapa})}
                                                                        >
                                                                           <GetApp />
                                                                        </IconButton>
                                                                     </Tooltip>
                                                                  </Box>
                                                               }
                                                            />
                                                         )) 
                                                   ))
                                                }
                                             </TreeItem>
                                          ))
                                    ))
                                 }
                              </TreeItem>
                              <Divider className={classes.dividerTree} />
                           </>
                        ))
                     }
            
                  </TreeView>
               </Scrollbars>
            </Paper>
         </Fade>
      </Body>
   )
}