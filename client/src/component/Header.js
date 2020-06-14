import React from 'react';
import { CardContent, Typography, CardMedia, CardActionArea, Button, CardActions, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './Header.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      paddingTop: 5,
      paddingLeft: 4,
    },
    paper: {
      backgroundColor: theme.palette.info.dark,
    }
  }));
  
function Header() {
    const classes = useStyles()
    return (
      <Paper>
        <AppBar position="fixed">
          <Typography variant="h5" className={classes.paper}>
              Pollster
          </Typography>
        </AppBar>
      </Paper>
    )
}

export default Header;