import React from 'react';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import ResumePage from './ResumePage';
import ProjectGalleryPage from './ProjectGalleryPage';
import PictureGalleryPage from './PictureGalleryPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//router
class App extends React.Component
{
render()
{
    return (<div><NavBar/><Router><div>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/resume" component={ResumePage}/>
            <Route path="/projects" component={ProjectGalleryPage}/>
            <Route path="/photos" component={PictureGalleryPage}/>
            </div></Router>
      </div>);
}
}
 export default App;
