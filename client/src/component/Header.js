import React from 'react';
import { CardContent, Typography, CardMedia, CardActionArea, Button, CardActions, AppBar } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import { fade,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
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
      <Paper style={{paddingBottom: 20}}>
        <AppBar position="fixed">
          <Toolbar className={classes.paper}>
          <Typography variant="h5">
              Pollster
          </Typography>
          </Toolbar>
        </AppBar>
      </Paper>
    )
}

export default Header;