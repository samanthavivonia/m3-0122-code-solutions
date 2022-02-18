import React from "react"
import ReactDOM from "react-dom"

class AppDrawer extends React.Component {
  constructor(props) {
   super(props)
   this.state = { open: false }
   this.handleOpen = this.handleOpen.bind(this);
   this.handleClose = this.handleClose.bind(this);
  }
  handleOpen() {
   console.log('Opened!')
   this.setState({ open: true });
  }

  handleClose() {
    console.log('Closed!')
    this.setState({ open: false });
  }

  render(props) {
    let hidden = "";
    if (!this.state.open) {
    hidden = "hidden"
  };
    return (
      <>
        <div className="menu-icon" onClick={this.handleOpen}>
          <i className="fas fa-bars" />
        </div>
        <div className="app-drawer">
          <div className={`drawer ${hidden}`}>
            <h3>Menu</h3>
            <h5 className="menu-item" onClick={this.handleClose}>About</h5>
            <h5 className="menu-item" onClick={this.handleClose}>Get Started</h5>
            <h5 className="menu-item" onClick={this.handleClose}>Sign In</h5>
          </div>
          <div className="overlay" onClick={this.handleClose}></div>
        </div>
      </>
    )
  }
}

export default AppDrawer
