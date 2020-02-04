import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";
import reducer from "./reducer";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Counter
        OnIncrement={() => store.dispatch({ type: "INCREMENT" })}
        OnDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </Provider>
  );
}
