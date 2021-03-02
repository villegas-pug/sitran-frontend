import React, { useState, useRef, useEffect } from 'react'
import {
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
   Box,
   IconButton,
   Tooltip
} from '@material-ui/core'
import { Storage, Publish, AttachFile, Cancel } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import Flash from 'react-reveal/Flash'
import styled from 'styled-components'
import MyButton from 'components/MuiButton'
import useOperativo from 'hooks/useOperativo'


const Body = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: calc(100vh - 300px);
`

const Footer = styled.div`
   position: absolute;
   bottom: 1rem;
   display: flex;
   justify-content: space-between;
`

const useStyles = makeStyles({
   root: {
      width: 300,
      padding: 10
   },
   media: {
      height: 140,
   },
   storage: {
      fontSize: 150,
      margin: 'auto'

   }
})

export default function SecondStageOpt02() {
   /*» HOOK'S  */
   const rFile = useRef()
   const classes = useStyles()

   /*» HOOK'S  */
   const { loading, handleChangeInputUncontrolled, handleSaveOperativo } = useOperativo()

   /*» EFFECT'S  */
   /* useEffect(() => () => { rFile.current = null }, [])/*» Cleanup... */

   /*» HANDLER'S  */
   const handleOnChageInputFile = ({ target: { files } }) => { handleChangeInputUncontrolled({ file: files[0] }) }

   const handleOnClickInputFile = e => { rFile.current.click() }

   const handleOnClickGuardar = e => { handleSaveOperativo() }

   return (
      <>
         <Flash>
            <Body>
               <Card className={classes.root}>
                  <CardActionArea>
                     <CardMedia
                        className={classes.media}
                        title="Storage"
                     >
                        <Box display='flex' justifyContent='center' alignItems='center'>
                           <Storage color='action' className={classes.storage} />
                        </Box>
                     </CardMedia>
                     <CardContent>
                        <Typography gutterBottom variant='h6' component='h6'>
                           » ALMACENAMIENTO
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                           Eligir archivo en formato xlsx.
                        </Typography>
                     </CardContent>
                  </CardActionArea>
                  <CardActions>
                     <input type='file' ref={rFile} accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' onChange={handleOnChageInputFile} hidden />
                     <Tooltip title='Adjuntar archivo' arrow placement='left'>
                        <IconButton
                           edge='start'
                           size='medium'
                           onClick={handleOnClickInputFile}
                        >
                           <AttachFile />
                        </IconButton>
                     </Tooltip>
                     <Tooltip title='Guardar' arrow placement='right' >
                        <IconButton
                           edge='end'
                           size='medium'
                           disabled={!rFile.current}
                           onClick={handleOnClickGuardar}
                        >
                           {<Publish />}
                        </IconButton>
                     </Tooltip>

                  </CardActions>
               </Card>
            </Body>
            <Footer>
               <MyButton
                  variant='outlined'
                  color='secondary'
                  startIcon={<Cancel />}
               >
                  CANCELAR
               </MyButton>
            </Footer>
         </Flash>
      </>
   )
}

