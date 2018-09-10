import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Document, Page } from 'react-pdf'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {educationTitle,educationText} from '../constants/text';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ResumeLatex from '../constants/resume';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
const styles = {
  card: {
    width: "100%",
    height: "100vh",
    backgroundColor:"#AE8D70",
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
    paddingTop:10,
    paddingBottom:10,
    color:"#D2B48C",
    textAlign:"center",
    },
    button:{padding:10,
            },
    background:{
      backgroundColor:"#eae0c8",
      minHeight:"100vh",
      maxHeight:"100%",
    },
    pdf:{
      width:"100%",
      height:"100%"
    }
};

function ResumePage(props) {
  const {
    classes
  } = props;
  return ( <Grid container className={classes.background}><Grid item md={1}sm={1}/><Grid item md={10}sm={10}xs={12}>< div >
    < Card className = {
      classes.card
    } >
      <embed className={classes.pdf} src={require('../media/resume.pdf')}/>
    < /Card>
      < /div ></Grid><Grid item md={1}sm={1}/></Grid>
  );
}
ResumePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumePage);
