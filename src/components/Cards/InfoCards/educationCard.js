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
import {educationTitle,educationText} from '../../../constants/text';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  heading:{
    fontSize:30,
    color:"#57371e",
  }
};
function educationCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < div  className = {
      classes.card
    } >
    < CardContent>
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >{educationTitle}</Typography> <hr className={classes.line}/>< Typography className={classes.text} >{educationText}
    </Typography>
    <ExpansionPanel defaultExpanded={true} style={{backgroundColor:"#D2B48C"}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>College: GMU</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.text}>
            I am currently attending George Mason University. I am a Junior studying for my bachelor of science in the Computer Science department.
            I am taking more specialized senior level CS courses now, and am really interested in learning more about machine learning and computer
            vision! I am scheduled to graduate in 2020 and plan on working for a company while I work towards getting a master in Computer Science
            or Cyber Security.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded={true} style={{backgroundColor:"#D2B48C"}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>High School: TJHSST</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.text}>
            I attended Thomas Jefferson High School for Science and Techology from 2012-2016. TJHSST at my time of attending was the number 1 high school in the United States.
            I graduated with a 3.89 GPA. During my time there I took as many tech classes as I could and discovered that I wanted to do programming for the rest of my life.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     </CardContent >
    </div>
      </div>
  );
}
educationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(educationCard);
