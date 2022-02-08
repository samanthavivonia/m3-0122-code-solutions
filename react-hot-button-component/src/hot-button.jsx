import React from "react"
import ReactDOM from "react-dom"

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked!')
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render(props) {
    console.log('Clicks: ', this.state.clicks)
    let className;
    if (this.state.clicks > 17) {
      className = 'hot6';
    } else if (this.state.clicks > 14) {
      className = 'hot5';
    } else if (this.state.clicks > 11) {
      className = 'hot4';
    } else if (this.state.clicks > 8) {
      className = 'hot3';
    } else if (this.state.clicks > 5) {
      className = 'hot2';
    } else if (this.state.clicks > 2) {
      className = 'hot1';
    }
    return <button onClick={this.handleClick} className = {className}>Hot Button</button>;
  }
}

export default HotButton;
