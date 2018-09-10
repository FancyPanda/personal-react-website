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
import {aboutMeTitle,aboutMeText} from '../../../constants/text';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import DraftsIcon from '@material-ui/icons/Drafts';
import {contactMeTitle,contactMeText} from '../../../constants/text';
import Grid from '@material-ui/core/Grid';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
const styles = {
  card: {
    width: "100%",
    minHeight: 450,
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
    //backgroundColor:"#7ec0ee",
    //borderRadius:10,
    paddingTop:10,
    paddingBottom:10,
    color:"#57371e",
    textAlign:"center",
    fontSize: 40,
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
  icon:{
    fontSize:30,
    color:"#7ec0ee",
  }
};

function aboutMeCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < div className = {
      classes.card
    } >
    < CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >{aboutMeTitle}< /Typography> <hr className={classes.line}/>< Typography className={classes.text} >{aboutMeText}
    < /Typography> <hr className={classes.line}/><Grid container style={{width:"100%"}}>
<Grid lg={3}md={3}sm={3}xs={3}/>
    <Grid item lg={2}md={2}sm={2}xs={2} style={{textAlign:"center"}}>
      <a href="mailto:michael@vanderlyn.info">

          <FontAwesomeIcon icon={faEnvelopeOpen} className={classes.icon}/>

        </a>
        </Grid>
        <Grid item lg={2}md={2}sm={2}xs={2} style={{textAlign:"center"}}>
        <a href="https://www.linkedin.com/in/michael-vanderlyn/">

            <FontAwesomeIcon icon={faLinkedin} className={classes.icon}/>
        </a>
        </Grid>
        <Grid item lg={2}md={2}sm={2}xs={2} style={{textAlign:"center"}}>
        <a href="https://github.com/FancyPanda">
          <FontAwesomeIcon icon={faGithubSquare} className={classes.icon}/>
        </a>
        </Grid>
        <Grid lg={3}/>
      </Grid>< /CardContent >
    < /div>
      < /div >
  );
}
aboutMeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(aboutMeCard);
