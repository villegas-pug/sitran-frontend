import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch, useSelector } from 'react-redux'
/* import { cambiarContentMainDrawer } from 'redux/actions/drawerAction' */
import { useHistory } from 'react-router-dom'
import Title from 'components/Styled/Title'
import { Menu, MenuItem, IconButton, Button } from '@material-ui/core'
import { AccountCircle, ExitToApp, Build } from '@material-ui/icons'
import { obtenerProcedimiento } from 'redux/actions/procedimientoActions'
import { Icons } from 'helpers/icons'
import _ from 'lodash'

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: ({ bgColor }) => `${bgColor}`
   },
   appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: 36,
   },
   hide: {
      display: 'none',
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
   },
   drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   drawerClose: {
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
         width: theme.spacing(9) + 1,
      },
   },
   toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}))

export default (props) => {
   const history = useHistory()
   /* const { userLogged, logout } = useAuth() */

   const classes = useStyles(props);
   const theme = useTheme();

   const dispatcher = useDispatch()

   const [anchorEl, setAnchorEl] = useState(null)
   const [open, setOpen] = React.useState(false)
   const { data: procedimiento } = useSelector(store => store.procedimiento)

   useEffect(() => {
      dispatcher(obtenerProcedimiento())
   }, [])

   const handleDrawerOpen = () => setOpen(true)

   const handleDrawerClose = () => setOpen(false)

   const handleOnClickOptSidebar = (titulo, path) => {
      /* dispatcher(cambiarContentMainDrawer(titulo)) */
      /* history.push(path) */
   }

   const handleOpenMenu = (e) => { setAnchorEl(e.currentTarget) }

   const handleCloseMenu = () => { setAnchorEl(null) }

   const handleCerrarSesion = () => {
      /* handleCloseMenu()
      logout() */
   }

   return (
      <div className={classes.root}>{/*» FLEX-CONTAINER */}
         <CssBaseline />

         {/*» FLEX-ITEM: 01, Barra superior  */}
         <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
               [classes.appBarShift]: open,
            })}
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                     [classes.hide]: open,
                  })}
               >
                  <MenuIcon />
               </IconButton>
               <Title name="Nacionalización" size='2rem' color='#fff' />
               <div style={{ marginLeft: 'auto' }}>
                  <Button
                     id='user-account'
                     style={{ color: '#fff' }}
                     aria-controls='menu-account'
                     aria-haspopup={true}
                     onClick={handleOpenMenu}
                  >
                     <AccountCircle />
                     {/* {userLogged} */}
                  </Button>

                  <Menu
                     keepMounted
                     id='menu-account'
                     anchorEl={anchorEl}
                     open={!!anchorEl}
                     onClose={handleCloseMenu}
                  >
                     <MenuItem onClick={handleCerrarSesion}>
                        <ExitToApp />Cerrar sesión
                     </MenuItem>
                  </Menu>
               </div>
            </Toolbar>
         </AppBar>
         {/*» FLEX-ITEM: 02 */}
         <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
               [classes.drawerOpen]: open,
               [classes.drawerClose]: !open,
            })}
            classes={{
               paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
               }),
            }}
         >
            <div className={classes.toolbar}>
               <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
               </IconButton>
            </div>
            <Divider />
            <List>
               {
                  procedimiento.map(({ nombre, path, icon }) => (
                     <ListItem
                        button
                        key={nombre}
                        onClick={() => { handleOnClickOptSidebar(nombre, path) }}
                     >
                        <ListItemIcon>{(() => _.get(Icons, icon, <Build />))()}</ListItemIcon>
                        <ListItemText primary={nombre} />
                     </ListItem>
                  ))
               }
            </List>
         </Drawer>

         {/*» FLEX-ITEM: 03   */}
         <main className={classes.content}>
            <div className={classes.toolbar} />
            {props.children}
         </main>
      </div>
   )
}