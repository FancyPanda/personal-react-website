import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
}
from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 450,
    borderRadius: "100%",
    height: 450,
    margin: "0 auto",
    //marginRight: 15,
    },
  content: {
    height: 0,
    paddingTop: '15%', // 16:9
  },
  title:{
    textAlign:"center",
  }
};

function CircleCard(props) {
  const {
    classes
  } = props;
  return ( < div style ={{textAlign:"center"}}>
    < Card className = {
      classes.card
    }style={props.displayImage==true?{backgroundImage: "url(" + props.image + ")",backgroundSize: "450px 500px"}:{}}>
    {!props.displayImage&&< CardContent className={classes.content}>
    < Typography className={classes.title}gutterBottom variant = "headline"
    component = "h2" >{props.title}< /Typography> < Typography component = "p" >{props.text}
    < /Typography> < /CardContent >}
    < /Card > < /div >
  );
}
CircleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircleCard);
