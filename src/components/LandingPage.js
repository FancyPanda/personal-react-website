import React from 'react';
import SquareCard from './Cards/SquareCard';
import CircleCard from './Cards/CircleCard';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import TitleBar from './TitleBar';
import InfoBar from './InfoBar';
import {aboutMeTitle,aboutMeText,leftBarInfo,rightBarInfo,educationText,educationTitle,experienceTitle,experienceText,contactMeTitle,contactMeText,hobbiesTitle,hobbiesText,projectsTitle,projectsText} from '../constants/text';
import contactMeCard from './Cards/InfoCards/contactMeCard';
import educationCard from './Cards/InfoCards/educationCard';
import experienceCard from './Cards/InfoCards/experienceCard';
import aboutMeCard from './Cards/InfoCards/aboutMeCard';
import hobbiesCard from './Cards/InfoCards/hobbiesCard';
import projectsCard from './Cards/InfoCards/projectsCard';
class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      curImageName: "profilepic2.JPG",
      displayImageCircle: true,
      card: aboutMeCard
    }
  }
  onClick(info){
    switch(info.text){
      case "Education":
        this.setState({curImageName:info.image,title:educationTitle,text:educationText,card:educationCard});
        break;
      case "Experience":
        this.setState({curImageName:info.image,title:experienceTitle,text:experienceText,card:experienceCard});
        break;
      case "Contact Me!":
        this.setState({curImageName:info.image,title:contactMeTitle,text:contactMeText,card:contactMeCard});
        break;
      case "About Me":
       this.setState({curImageName:info.image,title:aboutMeTitle,text:aboutMeText,card:aboutMeCard});
       break;
      case "Hobbies":
        this.setState({curImageName:info.image,title:hobbiesTitle,text:hobbiesText,card:hobbiesCard});
        break;
      case "Projects":
        this.setState({curImageName:info.image,title:projectsTitle,text:projectsText,card:projectsCard});
        break;
      default:
      break;


    }
  }
  render() {

    return ( < Grid container spacing = {
        16
      } styles={{backgroundColor:"#e8f1f2"}}>
      < Grid item xs = {
        12
      }
      sm = {
        12
      }
      md = {
        12
      } >
      < TitleBar / >
      < /Grid>
      <Hidden mdDown>
      < Grid item lg={2}>
      < InfoBar colWidth={12}info={leftBarInfo} onClick={this.onClick.bind(this)}/ >
      < /Grid></Hidden>
       < Grid item style = {{margin:"auto 0"}}xs = {
      12
    }
    sm = {
      12
    }
    md = {
        6
      }lg={4}xl={4} >
      < CircleCard displayImage= {this.state.displayImageCircle} title={this.state.displayImageCircle!==true?this.state.title:""}text={this.state.displayImageCircle===false?this.state.text:""} image={this.state.displayImageCircle===false?null:require("../media/"+this.state.curImageName)}/ >
      < /Grid> < Grid item xs = {
    12
  }
  sm = {
    12
  }
  md = {
      6
    } lg={4}xl={4} style={{margin:"auto 0"}}>
    {<this.state.card/>}< /Grid>
    <Hidden mdDown>
    < Grid item lg={2}>
    < InfoBar colWidth={12}info={rightBarInfo} onClick={this.onClick.bind(this)}/ >
    < /Grid></Hidden>
    <Hidden lgUp>
    <Grid item md={6}sm={12}xs={12} style={{textAlign:"center"}}>
  < InfoBar colWidth={4}info={leftBarInfo} onClick={this.onClick.bind(this)}/ >
</Grid>
<Grid item md={6}sm={12}xs={12} style={{textAlign:"center"}}>
    < InfoBar colWidth={4}info={rightBarInfo} onClick={this.onClick.bind(this)}/ >
    </Grid>
    </Hidden>
    < /Grid >
   );
}
}
export default LandingPage;
