//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
  return (
 <div className ="d-flex bg-dark text-white py-3 justify-content-center">
            <div className = "clock">
             <i className ="far fa-clock"></i>
            </div>
            <div className="number">{ props.placeSix % 10}</div>
            <div className="number">{ props.placeFive % 10}</div>
            <div className="number">{ props.placeFour % 10}</div>
            <div className="number">{ props.placeThree % 10}</div>
            <div className="number">{ props.placeTwo % 10}</div>
            <div className="number">{ props.placeOne % 10}</div>
  </div>);
}

SimpleCounter.propTypes= {
  placeSix: PropTypes.number,  placeFive: PropTypes.number,  placeFour: PropTypes.number,  placeThree: PropTypes.number,  placeTwo: PropTypes.number,  placeOne: PropTypes.number
}

let counter = 0;
setInterval (function(){
  const six = Math.floor (counter/100000);
  const five = Math.floor (counter/10000);
  const four = Math.floor (counter/1000);
  const three = Math.floor (counter/100);
  const two = Math.floor (counter/10);
  const one = Math.floor (counter/1);

  counter++;

  ReactDOM.render(<SimpleCounter placeOne={one} placeTwo={two} placeThree={three} placeFour={four} placeFive={five} placeSix={six} />, document.querySelector("#app")
  );
  },1000);


