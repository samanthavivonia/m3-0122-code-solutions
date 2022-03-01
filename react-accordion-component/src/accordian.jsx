import React from "react"
import ReactDOM from "react-dom"

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: null};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (id) {
    if (this.state.open === id) {
      console.log('Closed!')
      this.setState({ open: null });
    } else {
      console.log('Opened!');
      this.setState({ open: id });
    }
  }

  render() {
    let isOpen;
    let icon;
    let accordianSections = this.props.sections.map((section) => {
      console.log("Section: ", section)
      if (this.state.open === section.id) {
        isOpen = 'open'
        icon = 'minus'
      } else {
        isOpen = 'closed'
        icon = 'plus'
      }
      return (
        <div key={section.id} className={`accordian-section ${isOpen}`}>
          <div className="accordian-title">
            <h3>{section.title}</h3>
            <i className={`fas fa-${icon}`} onClick={() => this.handleClick(section.id)}/>
          </div>
          <div className="accordian-content">
            <p>{section.content}</p>
          </div>
        </div>
      )
    });
    return (
      <div className="accordian">
        {accordianSections}
      </div>
    )
  }
}

export default Accordian
