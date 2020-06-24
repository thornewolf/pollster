import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import './Header.css'

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    paper: {
      backgroundColor: theme.palette.info.dark,
    },
  }));
  
function Header() {
    const classes = useStyles()
    return (
      <Paper style={{paddingBottom: 60}}>
        <AppBar position="fixed">
          <Toolbar className={classes.paper}>
            <Link exact to={"/"} style={{ textDecoration: 'none' }}>
              <Typography variant="h5" style={{color: 'white'}}>Pollster</Typography>
            </Link>
         </Toolbar>
        </AppBar>
      </Paper>
    )
}

export default Header;