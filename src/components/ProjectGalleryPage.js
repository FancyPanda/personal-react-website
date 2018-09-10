import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
const styles = {
  card: {
    width: "100%",
    borderRadius: 10,
    margin:"auto",
  //  marginLeft: 15,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  gridList: {
width:"100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title:{
    width:"100%",
    //backgroundColor:"#7ec0ee",
    //borderRadius:10,
    paddingTop:10,
    paddingBottom:10,
    color:"#57371e",
    textAlign:"center",
    fontSize: 30,
    },
    text:{
      fontSize:20,
      color:"#57371e",
    },
    line:{
    border: 0,
    height: "1px",
    background: "#57371e",

  },
};
function ProjectGalleryPage(props) {
  const {
    classes
  } = props;

  return (
    <Grid container style={{paddingTop:20}}>

      <Grid item lg={12}md={12}sm={12}xs={12}>
      <img style= {{height:"100%",width:"100%"}}src ={require('../media/NasDewLogo.svg')}/>
      </Grid>
      <Grid item lg={12}md={12}sm={12}xs={12}>
        < CardContent >
      < Typography gutterBottom variant = "headline"
      component = "h2" className={classes.title} >NasDew< /Typography>< Typography className={classes.text} >This was a side project of mine in high school. It used crowd sourcing to collect info on
      deals in the area. When people found a deal in a store near them, they could enter it on our site then anyone could look up something
      they wanted to buy and see if it was on sale nearby them
      < /Typography>
      </CardContent>
      </Grid>

      <Grid item lg={12}md={12}sm={12}xs={12}>
      <img style= {{height:"auto",width:"100%",verticalAalign: "middle"}}src ={require('../media/campus.png')}/>
      </Grid>
      <Grid item lg={12}md={12}sm={12}xs={12}>
        < CardContent >
      < Typography gutterBottom variant = "headline"
      component = "h2" className={classes.title} >CampusUnite< /Typography>< Typography className={classes.text} >This was my capstone project in high school. It used a server service called parse, along with bootstrap, and a data stream service
      called PubNub for instant messaging. This project was geared for rising college freshmen or anyone new to an area. It allowed people to enter their intersts, and based off that it suggested people in your area to be your friends. The project also
      allowed you to view and create events that people can join in your area, and instant message your new friends.
      < /Typography>
      </CardContent>
      </Grid>

      </Grid>

  );
}
ProjectGalleryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectGalleryPage);
