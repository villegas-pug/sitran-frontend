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
      width: 250,
   },
   media: {
      margin: 'auto',
      marginTop: 10,
      width: 70,
      height: 70
   },
})

export default function SimpleCard({ title, descripcion, pathImg, path, ...rest }) {

   /*» HOOK'S */
   const classes = useStyles(rest)
   const history = useHistory()

   /*» HANDLER'S */
   const handleOnClick = (path) => { history.push(path) }

   return (
      <Card className={classes.root} >
         <CardActionArea>
            <CardMedia
               className={classes.media}
               image={pathImg}
               title={title}
            />
            <CardContent>
               <Typography variant="subtitle2" component="h1" color='textPrimary'>
                  {title.toUpperCase()}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p" align='justify'>
                  {descripcion}
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button
               size='small'
               color="primary"
               variant='text'
               onClick={() => { handleOnClick(path) }}
            >
               <ArrowForward color='action' />
            </Button>
         </CardActions>
      </Card>
   )
}