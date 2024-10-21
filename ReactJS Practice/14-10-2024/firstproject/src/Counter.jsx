// import React, { Component } from "react";

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   reset = () => {
//     this.setState({ count: 0 });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//         <button onClick={this.reset}>0</button>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import Navbar from "./Navbar";

const Counter = () => {
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  let reset = () => {
    setCount(0);
  };

  let getColor = () => {
    if (count > 0) {
      return "green";
    } else if (count < 0) {
      return "red";
    } else {
      return "blue";
    }
  };

  return (
    <div className="cartContainer">
      <Navbar />
      <h1>
        Cart : <span style={{ color: getColor() }}>{count}</span>
      </h1>
      <h1>Add to Cart</h1>
      <button className={"increment"} onClick={increment}>
        +
      </button>
      <button className={"decrement"} onClick={decrement}>
        -
      </button>
      <button className={"reset"} onClick={reset}>
        0
      </button>
    </div>
  );
};

export default Counter;
