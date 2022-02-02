import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";

function CustomButton() {
  return <button>Click Me!</button>;
};

reactDom.render(CustomButton, document.querySelector('#root'));
