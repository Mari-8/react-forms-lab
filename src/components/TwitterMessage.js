import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChars = () => {
    const maxChars = this.props.maxChars
    let messageLength = this.state.message.length
    return (
      maxChars - messageLength 
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        Remaining characters: {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
