// import tilt from 'tilt.js';
import React from 'react';
import ReactDOM from "react-dom";
import { Fragment } from "react";
const initTilt= ()=> {
  // Projects images
 
      const node = ReactDOM.findDOMNode(this);
     if (node instanceof HTMLElement) {
       const child = node.querySelector('.project-wrapper__image a div').tilt({
           maxTilt:3
       })
    return child
    }
       return(<Fragment></Fragment>)
};

export default initTilt;
