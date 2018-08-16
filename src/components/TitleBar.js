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
    height: "50vh",
    position: "relative",
    textAlign: "center"
  },
  topImage: {
    width: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    filter: "grayscale(100%) blur(1px)",
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
  bottomCentered: {
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translate(-50%,0)",
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
          require('../media/beach-beautiful-bridge-449627.jpg')
        }
        className = {
          classes.topImage
        }
        /> < Typography variant = "title"
        color = "inherit"
        className = {
          classes.dimmedCentered
        } >
        Michael.Vanderlyn. < /Typography> < div className = {
          classes.bottomCentered
        } >
        < /div> < /div>);
      }
    }
    export default withStyles(styles)(TitleBar);
