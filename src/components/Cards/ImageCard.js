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
import { CSSTransition } from 'react-transition-group';
const styles = {
  noHoverCircle: {
    transition: "filter 400ms ease-in-out, width 400ms ease-in-out,height 400ms ease-in-out,background-size 400ms  ease-in-out",
    backgroundSize: "175px 200px",
    position: "relative",
    width: 175,
    borderRadius: "50%",
    height: 175,
    margin: "0 auto",
    textAlign: "center",
     boxSizing: "border-box",
  },
  hoverCircle: {
    transition: "filter 400ms ease-in-out, width 400ms ease-in-out,height 400ms ease-in-out,background-size 400ms  ease-in-out",
    position: "relative",
    backgroundSize: "175px 200px",
    width: 175,
    borderRadius: "50%",
    height: 175,
    margin: "0 auto",
    textAlign: "center",
  },
  square: {
    transition: "filter 400ms ease-in-out,border-radius 400ms ease-in-out",
    position: "relative",
    width: 175,
    height: 175,
    borderRadius: 10,
    margin: "0 auto",
    textAlign: "center",
    },
  title: {
    margin: "0 auto",
    color: "white",
    fontSize: "20px",
    background: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    left: 0,
    bottom: 0
  }
};

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      gray: true,
      hover:false,
    }
  }

  onHoverOn() {
    console.log("hover on");
    this.setState({
      gray: !this.state.gray,
      hover:true,
    //  type: this.state.type === "square" ? "circle" : "square"
    });
  }
  onHoverOff() {
    console.log("hover off");
    this.setState({
      gray: !this.state.gray,
      hover:false,
      //type: this.state.type === "square" ? "circle" : "square"
    });
  }
  render() {
     const { show } = this.state;
    const {
      classes
    } = this.props;
    return (
      < div >
      < Card onMouseEnter = {
        this.onHoverOn.bind(this)
      }
      onMouseLeave = {
        this.onHoverOff.bind(this)
      }
      className = {

        this.state.hover ?
          classes.hoverCircle : classes.noHoverCircle

      }
      style = {
        this.state.gray === true ? {
          backgroundImage: "url(" + require(
            "../../media/" + this.props.fileName) + ")",
            filter: "grayscale(100%)",
        } : {
          backgroundImage: "url(" + require(
            "../../media/" + this.props.fileName) + ")",
          filter: "grayscale(0%)",
        }
      } >
      < h1 className = {
        classes.title
      } > {
        this.props.text
      } < /h1> < /Card > < /div >
    );
  }
}
ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCard);
