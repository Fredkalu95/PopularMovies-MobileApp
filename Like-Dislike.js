import React, { Component } from "react";
import { Button } from "react-native";


const reduceOne = (prevState, groupName, otherGroupName) => {
  prevState[groupName].wasClicked
    ? prevState[groupName].count = prevState[groupName].count - 1
    : prevState[groupName].count = prevState[groupName].count + 1;
  prevState[groupName].wasClicked = !prevState[groupName].wasClicked;
  if (prevState[otherGroupName].wasClicked) {
    prevState[otherGroupName].count = prevState[otherGroupName].count - 1;
    prevState[otherGroupName].wasClicked = false;
  }
  return prevState;
};

const reducer = action =>
  (prevState, props) =>
    action.type === "TOGGLE_LIKE"
      ? reduceOne(prevState, "like", "dislike")
      : reduceOne(prevState, "dislike", "like");

class LikeDislike extends Component {
  state = {
    like: {
      count: 0,
      wasClicked: false,
    },
    dislike: {
      count: 0,
      wasClicked: false,
    },
  };

  toggleLike = () => this.setState(reducer({ type: "TOGGLE_LIKE" }));
  toggleDislike = () => this.setState(reducer({ type: "TOGGLE_DISLIKE" }));

  render() {
    return (
      
            <><Button onClick={this.toggleLike}></Button><Button onClick={this.toggleDislike}></Button></>
            
      
    );
  }
}

export default LikeDislike;