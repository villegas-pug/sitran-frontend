import React from 'react'
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

const useStyles = makeStyles({
   root: {
      maxWidth: ({ width }) => width ?? 345,
   },
   media: {
      height: ({ height }) => height ?? 140,
   },
})

export default function SimpleCard({ title, descripcion, path, ...rest }) {

   const classes = useStyles(rest)
   const history = useHistory()

   const handleOnClick = (path) => { history.push(path) }

   return (
      <Card className={classes.root}>
         <CardActionArea>
            <CardMedia
               className={classes.media}
               image="/static/img/cards/plantillas-de-excel-para-recursos-humanos.jpg"
               title="Documento"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                  {title.toUpperCase()}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  {descripcion}
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button
               size="small"
               color="primary"
               variant='text'
               onClick={() => { handleOnClick(path) }}
            >
               <ArrowForward />
            </Button>
         </CardActions>
      </Card>
   )
}