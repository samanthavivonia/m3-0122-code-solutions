import React from "react"
import ReactDOM from "react-dom"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showing: 0}
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.directClick = this.directClick.bind(this);
    this.autoChangePicture = this.autoChangePicture.bind(this);
    this.handleLeftArrow = this.handleLeftArrow.bind(this);
    this.handleRightArrow = this.handleRightArrow.bind(this);
  }

  handleNext() {
    console.log('Next!');
    if (this.state.showing < (this.props.images.length - 1)) {
      this.setState({ showing: this.state.showing + 1 });
    } else {
      this.setState({ showing: 0 });
    }
  }

  handleBack() {
    console.log('Back!');
    if (this.state.showing > 0) {
      this.setState({ showing: (this.state.showing - 1) });
    } else {
      this.setState({ showing: (this.props.images.length - 1) });
    }
  }

  directClick(imageid) {
    console.log('Direct Click!');
    this.setState({ showing: imageid })
    // How to tell which one was clicked????????/
  }

  autoChangePicture() {
    console.log('Showing Changed!')
    this.timerID = window.setInterval(this.handleNext, 3000);
  }

  handleLeftArrow() {
    clearInterval(this.timerID);
    this.handleBack();
    this.autoChangePicture();
  }

  handleRightArrow() {
    clearInterval(this.timerID);
    this.handleNext();
    this.autoChangePicture();
  }

  componentDidMount() {
    this.autoChangePicture();
  }

  render() {
    console.log('Showing: ', this.state.showing)
    let dots = this.props.images.map((image) => {
      let dotIcon;
      if (this.state.showing === image.id) {
        dotIcon = 's'
      } else {
        dotIcon = 'r'
      }
      return (
        <i className={`fa${dotIcon} fa-circle`} key={image.id} onClick={() => this.directClick(image.id)}/>
      );
    })

    return (
      <div className="carousel">
        <div className="arrows">
          <i className="fas fa-chevron-left" onClick={this.handleLeftArrow}/>
          <img src={this.props.images[this.state.showing].src} alt="" />
          <i className="fas fa-chevron-right" onClick={this.handleRightArrow}/>
        </div>
        <div className="dots">
          {dots}
        </div>
      </div>
    )
  }
}

export default Carousel
