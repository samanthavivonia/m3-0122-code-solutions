import React from "react"
import ReactDOM from "react-dom"

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true});
  }

  render (props) {
    let btn;
    if (!this.state.isClicked) {
      btn = <button onClick={ this.handleClick }>Click Me!</button>
    } else {
      btn = < button onClick={ this.handleClick }>Thanks!</button>
    }
    return btn;
  }
}

const element = (
  <div>
    <CustomButton/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
