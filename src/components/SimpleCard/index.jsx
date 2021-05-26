import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import {
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Button,
   Typography,
} from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

import {Icons} from 'helpers/icons'

const useStyles = makeStyles({
   root: {
      width: 250,
   },
   media: {
      margin: 'auto',
      marginTop: 10,
      width: 70,
      height: 70
   },
})

export default function SimpleCard({ nombre, descripcion, icono, rutaPrincipal }) {

   /*» HOOK'S */
   const classes = useStyles()
   const history = useHistory()

   /*» HANDLER'S */
   const handleOnClick = (path) => { history.push(path) }


   return (
      <Card className={classes.root} >
         <CardActionArea>
            <CardMedia
               className={classes.media}
               title={nombre}
            >
               {
                  Icons[icono]
               }
            </CardMedia>
            <CardContent>
               <Typography variant='subtitle2' component='h1' color='textPrimary'>
                  {nombre.toUpperCase()}
               </Typography>
               <Typography variant='body2' color='textSecondary' component='p' align='justify'>
                  {descripcion}
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button
               size='small'
               color='primary'
               variant='text'
               onClick={() => { handleOnClick(rutaPrincipal) }}
            >
               <ArrowForward color='action' />
            </Button>
         </CardActions>
      </Card>
   )
}

SimpleCard.propTypes = {
   nombre: PropTypes.string.isRequired, 
   descripcion: PropTypes.string.isRequired, 
   icono: PropTypes.string.isRequired,
   rutaPrincipal: PropTypes.string.isRequired
}