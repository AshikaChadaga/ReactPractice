import React, { Component } from "react";
import Hoc from "../hoc/Hoc";
import Button from '@mui/material/Button';

class LikesCount extends Component {
  render() {
    return (
      <div>
        {this.props.CountNumber} <br /><br />
        <Button onClick={this.props.handleCLick} variant="outlined">Like👍🏻</Button>
      </div>
    );
  }
}

const EnhancedLikes = Hoc(LikesCount, 5);

export default EnhancedLikes;