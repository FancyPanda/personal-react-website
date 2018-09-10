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
import {Link} from 'react-router-dom'
import {projectsTitle,projectsText} from '../../../constants/text';
import ProjectGalleryPage from '../../ProjectGalleryPage';
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

  }
};

function projectsCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < div  className = {
      classes.card
    } >
    < CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >{projectsTitle}< /Typography><hr className={classes.line}/>
    <ProjectGalleryPage/>
    </CardContent>
    < /div>
      < /div >
  );
}
projectsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(projectsCard);
