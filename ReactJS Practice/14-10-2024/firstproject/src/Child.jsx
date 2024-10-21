// & 1st way
// import React from "react";

// const Child = (props) => {
//   return (
//     <div>
//       <h1>{props.count}</h1>
//       <button onClick={props.increment}>+</button>
//       <button onClick={props.decrement}>-</button>
//       <button onClick={props.reset}>0</button>
//     </div>
//   );
// };

// export default Child;

// & 2nd way
// import React from "react";

// const Child = ({ increment, decrement, count, reset }) => {
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <button onClick={reset}>0</button>
//     </div>
//   );
// };

// export default Child;

// & 3rd way
// import React from "react";

// const Child = ({ count, increment, decrement, reset }) => {
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <button onClick={reset}>0</button>
//     </div>
//   );
// };

// export default Child;

// & 4th way
import React from "react";

const Child = (props) => {
  let { count, increment, decrement, reset } = props;
  return (
    <div>
      <h1 style={{ color: "blue" }}>{count}</h1>
      <button
        onClick={increment}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "5px",
          borderRadius: "5px",
          marginLeft: "2px",
          cursor: "pointer",
        }}
      >
        +
      </button>
      <button
        onClick={decrement}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "5px",
          borderRadius: "5px",
          marginLeft: "2px",
          cursor: "pointer",
        }}
      >
        -
      </button>
      <button
        onClick={reset}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "5px",
          borderRadius: "5px",
          marginLeft: "2px",
          cursor: "pointer",
        }}
      >
        0
      </button>
    </div>
  );
};

export default Child;
