import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
}from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {experienceTitle,experienceText} from '../../../constants/text';
import {Document, Page} from 'react-pdf';
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

function experienceCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < div   className = {
      classes.card
    } >
    < CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >{experienceTitle}< /Typography> < Typography component = "p" >{experienceText}
    < /Typography>
    <Document file={require('../../../media/resume.pdf')}>
    <Page scale={1}style={{width:"100%"}}pageNumber = {1}/>
    </Document>
     < /CardContent >
    < /div>
      < /div >
  );
}
experienceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(experienceCard);
