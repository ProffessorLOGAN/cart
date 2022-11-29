// import React from "react";
// import Cart from "./components/Cart/Cart";

// function App() {
//   return (
//     <div className="App">
//       <h1>Cart</h1>
//       <Cart />
//     </div>
//   );
// }

// export default App;

import React from "react";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value > 5) return false;
    return true;
  }
  componentDidUpdate() {
    console.log("->");
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        return {
          value: prevState.value + 1
        };
      });
    }, 1000);
  }
  render() {
    console.log(this.state.value);
    return <div>{this.state.value}</div>;
  }
}

export default App