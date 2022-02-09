import React from "react"
import ReactDOM from "react-dom"

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on : true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('toggled!')
    this.setState({ on: !this.state.on });
  }

  render(props) {
    let onOrOff;
    if (this.state.on) {
      onOrOff = "on"
    } else {
      onOrOff = "off"
    }
    return (
      <div onClick={this.handleClick} className={`toggle-switch-outer ${ onOrOff}`}>
        <div className="toggle-switch-inner"></div>
      </div>
    )
  }
}

export default ToggleSwitch;
