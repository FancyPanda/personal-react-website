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
import {
  Link} from 'react-router-dom';
class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      curImageName: "profilepic2.JPG",
      displayImageCircle: true,
      card: aboutMeCard,
      selected:0
    }
  }
  handleChange(event, value){
    console.log(value);
    switch(value){
      case 1:
        this.setState({title:educationTitle,text:educationText,card:educationCard,selected:value});
        break;
      case 3:
        this.setState({title:contactMeTitle,text:contactMeText,card:contactMeCard,selected:value});
        break;
      case 0:
       this.setState({title:aboutMeTitle,text:aboutMeText,card:aboutMeCard,selected:value});
       break;
      case 2:
        this.setState({title:projectsTitle,text:projectsText,card:projectsCard,selected:value});
        break;
      default:
      break;
    }
  }
  handleChangeOld = (event, value) => {
   this.setState({ value });
 };
  render() {

    return ( < Grid container spacing = {
        0
      } >
      <Grid item lg={12}><TitleBar/></Grid>
      <Grid item container style={{height:"100vh",backgroundColor:"#eae0c8"}} lg={12}>
      <Grid item lg={12}>

        <Tabs style={{backgroundColor:"#7ec0ee"}}
          value={this.state.selected}
          onChange={this.handleChange.bind(this)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab value = {0} style={{color:"white"}} label="About Me"/>
          <Tab value = {1} style={{color:"white"}} label="Education"/>
          <Tab value = {2} style={{color:"white"}} label="Projects"/>
          <Link to={'./resume'}><Tab value = {3} style={{color:"white"}} label="Resume"/></Link>
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
