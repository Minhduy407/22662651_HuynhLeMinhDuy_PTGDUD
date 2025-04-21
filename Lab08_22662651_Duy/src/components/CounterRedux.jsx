import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset } from '../CounterSlide';

export default function CounterRedux() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Giá trị: {count}</h2>
      <div className="flex gap-2 mt-4">
            <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => dispatch(increase())}>Tăng</button>
            <button className="bg-amber-300 text-white px-3 py-1 rounded" onClick={() => dispatch(decrease())}>Giảm</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => dispatch(reset())}>Reset</button>
            </div>
    </div>
  );
}
