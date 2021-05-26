import React, {useRef} from 'react'
import {
   Card, 
   CardContent,
   CardMedia,
   CardActions,
   CardActionArea,
   Typography,
   IconButton,
   CircularProgress
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { 
   Storage,
   AttachFile,
   Publish
} from '@material-ui/icons'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { useState } from 'react'
import useInterpol from 'hooks/useInterpol'
import { useEffect } from 'react'

const Content = styled.div`
   height: calc(100% - 5rem);
   display: flex;
   justify-content: center;
   align-items: center;
`

const useStyles = makeStyles({
   root: {
      margin: 'auto',
      maxWidth: 345,
   },
   media: {
      height: 140,
      display: 'flex'
   },
   icon:{
      margin: 'auto',
      fontSize: 150,
      textAlign: 'center',
   }
})

export default function NuevoInterpolSubMod() {

   /*» HOOK'S  */
   const rFile = useRef()
   const classes = useStyles()
   const [file, setFile] = useState(null)
   
   /*» CUSTOM HOOK'S  */
   const { interpolPdfLoading, handleSaveFile } = useInterpol()

   /*»  EFFECT'S */
   useEffect(() => { !interpolPdfLoading && setFile(null) }, [interpolPdfLoading])

   /*» HANDLER'S  */
   const handleClickAppendFile = () => { rFile.current.click() }
   const handleChangeAppendFile = ({ target: { files } }) => { setFile(files[0]) }

   return (
      <Content>
         <Fade>
            <Card className={classes.root}>
               <CardActionArea>
                  <CardMedia
                     className={classes.media}
                     title='Archivo'
                  >
                     <Storage color='primary' className={classes.icon} />
                  </CardMedia>
                  <CardContent>
                     <Typography gutterBottom variant='h5' component='h2'>
                        Archivo Interpol
                     </Typography>
                     <Typography variant='body2' color='textSecondary' component='p'>
                        El archivo adjunto debe estar en formato pdf.
                     </Typography>
                  </CardContent>
               </CardActionArea>
               <CardActions>
                  <IconButton
                     size='large' 
                     color='primary'
                     onClick={handleClickAppendFile}
                     disabled={interpolPdfLoading}
                  >
                     <AttachFile fontSize='large' />
                  </IconButton>
                  <IconButton
                     size='large' 
                     color='primary'
                     disabled={!file}
                     onClick={() => {handleSaveFile(file)}}
                  >
                     {
                        interpolPdfLoading
                           ? <CircularProgress size={20} />
                           : <Publish fontSize='large' />
                     } 
                  </IconButton>
               </CardActions>
               <input 
                  ref={rFile} 
                  type='file' 
                  accept='application/pdf' 
                  onChange={handleChangeAppendFile}
                  hidden 
               />
            </Card>
         </Fade>
      </Content>
   )
}
