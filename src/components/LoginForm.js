import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "test", 
      password: "test"
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  } 

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleForm = (event) => {
    event.preventDefault() 
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleForm(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleUsername(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handlePassword(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
