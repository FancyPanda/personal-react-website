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
import {hobbiesTitle,hobbiesText} from '../../../constants/text';
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

function hobbiesCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < Card raised={true}  className = {
      classes.card
    } >
    < CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >{hobbiesTitle}< /Typography> < Typography component = "p" >{hobbiesText}
    < /Typography> < /CardContent >
    < /Card>
      < /div >
  );
}
hobbiesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(hobbiesCard);
