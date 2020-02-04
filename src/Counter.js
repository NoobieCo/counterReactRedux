import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  // OnDecrement = () => {
  //   this.props.dispatch({ type: "DECREMENT" });
  // };
  // OnIncrement = () => {
  //   this.props.dispatch({ type: "INCREMENT" });
  // };
  incrementIfOdd = () => {
    console.log("entered with value" + this.props.count);
    if (this.props.count % 2 === 0) return;
    else this.props.OnIncrement();
  };

  incrementAsync = () => {
    console.log("entered with value" + this.props.count);
    setTimeout(() => {
      this.props.OnIncrement();
    }, 1000);
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <button onClick={this.props.OnDecrement}>Decrement</button>
          <button onClick={this.props.OnIncrement}>Increment</button>
          <button onClick={this.incrementIfOdd}>IncrementIfOdd</button>
          <button onClick={this.incrementAsync}>IncrementAsync</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);

//export default Counter;
