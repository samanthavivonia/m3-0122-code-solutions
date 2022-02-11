import React from "react";
import ReactDOM from "react-dom";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false , timerCount : 0};
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick () {
    if (!this.state.playing) {
      this.handleStart()
    } else {
      this.handleStop()
    }
  }

  handleStart() {
    console.log('Started!');
    this.setState({ playing: !this.state.playing });
    this.timerID = window.setInterval(() => {
      this.setState({ timerCount: this.state.timerCount+1});
    }, 1000);
  }

  handleStop() {
    console.log('Stopped!');
    this.setState({ playing: !this.state.playing });
    clearInterval(this.timerID);
  }

  handleReset() {
    if (!this.state.playing) {
      console.log('Reset!');
      this.setState({ timerCount: 0})
    }
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
        <div onClick={this.handleReset} className="stopwatch-seconds">
          <h3>{this.state.timerCount}</h3>
        </div>
        <div onClick={this.handleClick} className="stopwatch-button">
          <i className={`fas ${buttonIcon}`} />
        </div>
      </div>
    )
  }
}

export default Stopwatch
