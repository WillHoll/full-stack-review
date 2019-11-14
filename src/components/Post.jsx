import React, { Component } from 'react';

class Post extends Component {
  state = {
    title: '',
    content: '',
    imgUrl: '',
    editToggle: false
  }

  toggle = () => {
    this.setState((prevState) => ({editToggle: !prevState.editToggle}))
  }
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const {editToggle} = this.state
    return (
      <div>
        {editToggle ? <input onChange={e => this.handleChange('title', e.target.value)} value={this.state.title}/> :<h2>{this.state.title}</h2>}
        {editToggle ? <input onChange={e => this.handleChange('imgUrl', e.target.value)} value={this.state.imgUrl}/> : <img src={this.state.imgUrl} alt="" />}
        {editToggle ? <textarea onChange={e => this.handleChange('content', e.target.value)} value={this.state.content}/> : <p>{this.state.content}</p>}
    <button onClick={this.toggle}>{editToggle ? 'Save' : "Edit"}</button>
      </div>
    );
  }
}

export default Post;