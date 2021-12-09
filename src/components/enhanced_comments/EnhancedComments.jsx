import React, { Component } from "react";
import Hoc from "../hoc/Hoc";
import Button from '@mui/material/Button';

class CommentsCount extends Component {
  render() {
    return (
      <div>
        Total Comments : {this.props.CountNumber} <br /><br />
        <Button onClick={this.props.handleCLick} variant="outlined">Add Comment!</Button>
      </div>
    );
  }
}

const EnhancedComments = Hoc(CommentsCount, 10);

export default EnhancedComments;