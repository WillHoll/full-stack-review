import React, { Component } from 'react';
import Post from './Post';
import Add from './Add';

class Dash extends Component {
  state = {
    posts: []
  }
  render() {
    return (
      <div>
        <Post />
        <Add />
      </div>
    );
  }
}

export default Dash;