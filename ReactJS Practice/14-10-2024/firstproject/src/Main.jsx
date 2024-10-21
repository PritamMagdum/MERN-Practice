// & Class Based Component
// import React, { Component } from "react";

// class Main extends Component {
//   render() {
//     return <div>Class Based Component</div>;
//   }
// }

// export default Main;

// & Functional Based Component
// import React from "react";

// function Main() {
//   return <div>Functinoal Based Component</div>;
// }

// export default Main;

// & State in Class Component
// import React, { Component } from "react";

// export default class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       FName: "Pritam",
//       LName: "Magdum",
//     };
//   }
//   render() {
//     return <div>{this.state.FName}</div>;
//   }
// }

// & State in Functional Component
// import React, { useState } from "react";

// export default function Main() {
//   let [state, setState] = useState("Pritam");
//   return <div>{state}</div>;
// }

import React, { useState } from "react";
import Child from "./Child";

const Main = () => {
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
  return (
    <div>
      <Child
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </div>
  );
};

export default Main;
