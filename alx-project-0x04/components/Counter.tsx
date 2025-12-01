import { useAppSelector, useAppDispatch } from "../store/hooks";
import { increment, decrement, incrementByAmount } from "../store/slices/counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>+ Increase</button>
      <button onClick={() => dispatch(decrement())}>- Decrease</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increase by 5</button>
    </div>
  );
}
