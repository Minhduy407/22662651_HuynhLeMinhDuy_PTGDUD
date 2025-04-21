import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset } from '../CounterSlide';

export default function CounterRedux() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Giá trị: {count}</h2>
      <button onClick={() => dispatch(increase())}>Tăng</button>
      <button onClick={() => dispatch(decrease())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
