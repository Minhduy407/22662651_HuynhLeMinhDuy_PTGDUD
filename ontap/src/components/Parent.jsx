import React from "react";
const Child = React.memo(({count}) => {
    console.log("Child component rendered");
    return <h2>Giá trị: {count}</h2>
})

export default function Parent() {
    const [count, setCount] = React.useState(0);

    return(
        <div className="flex flex-col items-center justify-center h-screen"> 
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <Child count={count} />
        </div>
    )
}