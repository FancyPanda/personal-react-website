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
    height: 450,
    borderRadius: 10,
    margin:"auto",
  //  marginLeft: 15,
  },
  root:{
    padding:0
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title:{
    width:"100%",
    backgroundColor:"#006494",
    borderRadius:10,
    paddingTop:10,
    paddingBottom:10,
    color:"white",
    textAlign:"center",
    },
};

function SquareCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < Card raised={true}  className = {
      classes.card
    } style={props.displayImage==true?{backgroundImage: "url(" + props.image + ")",backgroundSize: "450px 500px",}:{}}>
    {!props.displayImage&&< CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >{props.title}< /Typography> < Typography component = "p" >{props.text}
    < /Typography> < /CardContent >}
    < /Card>
      < /div >
  );
}
SquareCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SquareCard);
