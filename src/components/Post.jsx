import React, { Component } from 'react';

class Post extends Component {
  state = {
    title: '',
    content: '',
    imgUrl: '',
    editToggle: false
  }
  render() {
    return (
      <div>
        Post.jsx
      </div>
    );
  }
}

export default Post;