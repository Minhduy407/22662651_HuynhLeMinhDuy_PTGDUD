import useCounter from "./useCounter";

export default function CounterComponent(){
    const {count, increment, decrement, reset} = useCounter();
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h2>Giá trị: {count}</h2>
            <button onClick={increment}>Tăng</button>
            <button onClick={decrement}>Giảm</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}