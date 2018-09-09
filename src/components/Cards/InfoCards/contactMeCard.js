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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import DraftsIcon from '@material-ui/icons/Drafts';
import {contactMeTitle,contactMeText} from '../../../constants/text';
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

  }
};

function contactMeCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < div  className = {
      classes.card
    }>
    < CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >{contactMeTitle}< /Typography> <hr className={classes.line}/>< Typography className={classes.text} >{contactMeText}
    < /Typography>
      <Divider/>
    <List style={{width:"100%"}}component="nav">
      <a href="mailto:michael@vanderlyn.info">
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText className={classes.avatar}primary="michael@vanderlyn.info" />
        </ListItem>
        </a>
        <a href="https://www.linkedin.com/in/michael-vanderlyn/">
        <ListItem button>
          <ListItemIcon>
            <img className={classes.avatar} src = {require('../../../media/In-2C-34px-R.png')}/>
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItem>
        </a>
        <a href="https://github.com/FancyPanda">
        <ListItem button>
          <ListItemIcon>
          <img className={classes.avatar} src = {require('../../../media/GitHub-Mark-32px.png')}/>
      </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItem>
        </a>
      </List>
      < /CardContent >
    < /div>
      < /div >
  );
}
contactMeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(contactMeCard);
