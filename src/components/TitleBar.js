import React from 'react';
import {
  withStyles
}
from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ArrowIcon from '@material-ui/icons/ArrowDropDown';

const styles = {
  topBar: {
    width: "100%",
    height: "100vh",
    position: "relative",
    textAlign: "center",
    overflow:"hidden",
  },
  topImage: {
    width: "100%",
    height: "100vh",

    objectFit: "cover",
    filter:"brightness(70%)",
    //filter: "grayscale(100%) blur(1px)",
    //transform: "translate(7%,0)",
  },
  dimmedCentered: {
    background: 'rgba(0, 0, 0, 0.5)',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    width: '100%',
    textAlign: "center",
    fontSize: "40px",
    paddingTop: 20,
    paddingBottom:20
  },
  centered:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    height:"auto",
    textAlign: "center",
    fontSize: "40px",
    //paddingTop: 35,
    //paddingBottom:35,
    padding:40,
    //background: 'rgba(76, 70, 50, 0.5)'
  },
  subtitle:{
    color:"white",
  },
  title:{
    color:"white",
  },
  bottomCentered: {
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translate(-50%,0)",
  },
  line:{
  border: 0,
  height: "1px",
  background: "#fff",
  
}
}
class TitleBar extends React.Component {
    render() {
      const {
        classes
      } = this.props;
      return ( < div className = {
          classes.topBar
        } >
        < img alt = "beach"
        src = {
          require('../media/welcome.JPG')
        }
        className = {
          classes.topImage
        }
        />
        <div className={classes.centered}>
         <hr className={classes.line}/><Typography variant = "title" className={classes.subtitle}>
         Welcome, I'm
         </Typography>
        < Typography variant = "display3"
        color = "inherit"
        className = {
          classes.title
        } >
        Michael Vanderlyn < /Typography><hr className={classes.line}/> </div> < /div>);
      }
    }
    export default withStyles(styles)(TitleBar);
