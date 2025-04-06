import React, { useState, useCallback } from "react";

const Child = React.memo(({onClick}) =>{
    console.log("Child component rendered");
    return <button onClick={onClick}>Nhấn vào tôi</button>
})

export default function ParentUseCallback() {
    const [count,setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    return(
        <div>
            <h1>USE CALLBACK EXAMPLE</h1>
            <button onClick={() => setCount(count + 1)}>Tăng count {count}</button>
            <Child onClick={handleClick} />
        </div>
    )
}