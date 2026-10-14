import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
} from "./redux/features/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(5);

  return (
    <div>
      <h1>{count}</h1>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(increaseByAmount(Number(num)));
        }}
      >
        Increase by certain amount
      </button>
    </div>
  );
};

export default App;
