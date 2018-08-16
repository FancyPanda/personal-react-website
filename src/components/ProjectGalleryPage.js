import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
const styles = {
  card: {
    width: "100%",
    borderRadius: 10,
    margin:"auto",
  //  marginLeft: 15,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  gridList: {
width:"100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title:{
    width:"100%",
    backgroundColor:"#006494",
    borderRadius:10,
    paddingTop:10,
    paddingBottom:10,
    color:"white",
    textAlign:"center",
    },
    button:{},
    tile:{},
};
const tileData = [{
    img: "profilepic.JPG",
    title: 'Image1',
    author: 'author1',
   },{
       img: "profilepic2.JPG",
       title: 'Image2',
       author: 'author',
      },{
          img: "profilepic2.JPG",
          title: 'Image3',
          author: 'author',
         },{
             img: "profilepic.JPG",
             title: 'Image4',
             author: 'author',
           },];
function ProjectGalleryPage(props) {
  const {
    classes
  } = props;

  return ( <Grid container><Grid item md={1}sm={1}/><Grid item md={10}sm={10}xs={12}>< div >
    < Card raised={true}  className = {
      classes.card
    } >
    < CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" className={classes.title} >Project Gallery< /Typography>
    <GridList cellHeight={'auto'} className={classes.gridList}>

        {tileData.map(tile => (
          <GridListTile className={classes.tile}key={tile.img}>
            <img src={require('../media/'+tile.img)} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
     < /CardContent >
     <CardActions>
     <Link style={{margin:"auto"}}to="/">
     <Button variant="contained" color="primary" className={classes.button}>Back</Button>
     </Link>
     </CardActions>
    < /Card>
      < /div ></Grid><Grid item md={1}sm={1}/></Grid>
  );
}
ProjectGalleryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectGalleryPage);
