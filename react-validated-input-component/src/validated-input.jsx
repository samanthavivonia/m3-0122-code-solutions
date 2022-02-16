import React from "react"
import ReactDOM from "react-dom"

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render(props) {
    let icon;
    let validationMessage;
    let isValid;
    console.log('value: ', this.state.value)
    if (this.state.value.length === 0) {
      isValid = 'invalid'
      validationMessage = 'A password is required'
      icon = 'times'
    } else if (this.state.value.length < 8) {
      isValid = 'invalid'
      validationMessage = 'Password is too short'
      icon = 'times'
    } else if (this.state.value.length >= 8) {
      isValid = 'valid'
      validationMessage = ''
      icon = 'check'
    }
    return (
      <div className={`labelAndInput ${isValid}`}>
        <label htmlFor="password">Password</label>
        <div className="inputAndIcon">
          <input type="password" name="password" value={this.state.value} onChange={this.handleChange}/>
          <i className={`fas fa-${icon}`} />
        </div>
        <div className="validation">
          {validationMessage}
        </div>
      </div>
    )
  }
}

export default ValidatedInput
