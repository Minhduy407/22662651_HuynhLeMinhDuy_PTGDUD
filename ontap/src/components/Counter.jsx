import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div className="flex flex-col items-center justify-center h-screen"> 
            <h2>Giá trị: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}