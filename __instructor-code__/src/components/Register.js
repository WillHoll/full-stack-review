import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
  state = {
    email: '',
    name: '',
    password1: '',
    password2: ''
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.email}
          onChange={e => this.handleChange('email', e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={this.state.name}
          onChange={e => this.handleChange('name', e.target.value)}
          placeholder="Name"
          type="text"
        />
        <input
          value={this.state.password1}
          onChange={e => this.handleChange('password1', e.target.value)}
          placeholder="Password"
          type="password"
        />
        <input
          value={this.state.password2}
          onChange={e => this.handleChange('password2', e.target.value)}
          placeholder="Retype password"
          type="password"
        />
        <button>Register</button>
        <Link to="/">
          <h4>Already have an account? Login here</h4>
        </Link>
      </div>
    )
  }
}
