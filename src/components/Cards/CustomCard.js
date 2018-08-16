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

const styles = {
  card: {
    maxWidth: 345,
    borderRadius: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function CustomCard(props) {
  const {
    classes
  } = props;
  return ( < div >
    < Card className = {
      classes.card
    } >
    < CardMedia className = {
      classes.media
    }
    image = "./media/android-wallpaper-beach-foam-533923.jpg"
    title = "Contemplative Reptile" / >
    < CardContent >
    < Typography gutterBottom variant = "headline"
    component = "h2" >
    About me < /Typography> < Typography component = "p" >
    I am a developer from gmu, follow my linked in
    for more: < /Typography> < href src =
    "www.linkedin.com/in/michael-vanderlyn" > click < /href>

    < /CardContent> < CardActions >
    < Button size = "small"
    color = "primary" >
    Share < /Button> < Button size = "small"
    color = "primary" >
    Learn More < /Button> < /CardActions> < /Card> < /div>
  );
}
CustomCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomCard);
