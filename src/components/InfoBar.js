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
  console.log(props.selected);
  console.log("info"+props.info);
  return (
    < Grid container style = {{textAlign:"center",paddingTop:16,height:"100vh"}}spacing = {
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
     < ImageCard selected = {props.selected==obj.text?true:false}gray = {
       false
     }
    type = "circle"
    fileName = {obj.image}
    size = {obj.size}
    text = {obj.text} / ></button>
       < /Grid>))}
  < /Grid >
);
}
InfoBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoBar);
