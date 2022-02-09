import React from "react";
import ReactDOM from "react-dom";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked!')
    this.setState({ playing: !this.state.playing });
  }

  render(props) {
    let buttonIcon;
    if (this.state.playing) {
      buttonIcon = "fa-pause"
    } else {
      buttonIcon = "fa-play"
    }
    return (
      <div className="stopwatch">
        <div className="stopwatch-seconds">
          <h3>0</h3>
        </div>
        <div onClick={this.handleClick}className="stopwatch-button">
          <i className={`fas ${buttonIcon}`} />
        </div>
      </div>
    )
  }
}

export default Stopwatch
