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
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      curImageName: "profilepic2.JPG",
      displayImageCircle: true,
      card: aboutMeCard,
      selected:"About Me"
    }
  }
  onClick(info){
    switch(info.text){
      case "Education":
        this.setState({curImageName:info.image,title:educationTitle,text:educationText,card:educationCard,selected:info.text});
        break;
      case "Experience":
        this.setState({curImageName:info.image,title:experienceTitle,text:experienceText,card:experienceCard,selected:info.text});
        break;
      case "Contact Me!":
        this.setState({curImageName:info.image,title:contactMeTitle,text:contactMeText,card:contactMeCard,selected:info.text});
        break;
      case "About Me":
       this.setState({curImageName:info.image,title:aboutMeTitle,text:aboutMeText,card:aboutMeCard,selected:info.text});
       break;
      case "Hobbies":
        this.setState({curImageName:info.image,title:hobbiesTitle,text:hobbiesText,card:hobbiesCard,selected:info.text});
        break;
      case "Projects":
        this.setState({curImageName:info.image,title:projectsTitle,text:projectsText,card:projectsCard,selected:info.text});
        break;
      default:
      break;


    }
  }
  render() {

    return ( < Grid container spacing = {
        0
      } >
      <Grid item lg={12}><TitleBar/></Grid>
      <Grid item container style={{height:"100vh",backgroundColor:"#eae0c8"}} lg={12}>
      <Grid item lg={12}>

        <Tabs style={{backgroundColor:"#7ec0ee"}}
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab style={{color:"white"}} label="About Me" />
          <Tab style={{color:"white"}} label="Education" />
          <Tab style={{color:"white"}} label="Projects" />
          <Tab style={{color:"white"}} label="Resume" />
        </Tabs>

      </Grid>
      <Grid item lg={1}/>
      < Grid item lg={2}>
      < /Grid>
      <Grid item xs={6}sm={6}md={6}>
      <Grid container>

      < Grid item xs = {
    12
  }
  sm = {
    12
  }
  md = {
      12
    } lg={12}xl={12} style={{margin:"auto 0"}}>
    {<this.state.card/>}< /Grid>
    </Grid>
    </Grid>
    < Grid item lg={2}>
      < /Grid>
    <Grid item lg={1}/>
    < /Grid >
    </Grid>
   );
}
}

export default LandingPage;
