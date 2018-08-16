import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
}
from '@material-ui/core/styles';
import ImageCard from './Cards/ImageCard';
import Grid from '@material-ui/core/Grid';
const styles = {

};

function InfoBar(props) {

  const {
    classes
  } = props;
  var handleClick = (obj) => {
    console.log(obj)
    props.onClick(obj);
  }
  console.log("info"+props.info);
  return (
    < Grid container style = {{textAlign:"center"}}spacing = {
      16
    } >
    {props.info.map(obj=>(
    < Grid item key={obj.text} xs = {
     props.colWidth
    }
    sm = {
     props.colWidth
    }
    md = {
       props.colWidth
     } >
     <button style = {{backgroundColor: "Transparent",backgroundRepeat:"no-repeat",border: "none",cursor:"pointer",overflow: "hidden",outline:"none",}}onClick = {handleClick.bind(this,obj)}>
     < ImageCard gray = {
       false
     }
    type = "circle"
    fileName = {obj.image}
    size = "175px 200px"
    text = {obj.text} / ></button>
       < /Grid>))}
  < /Grid >
);
}
InfoBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoBar);
