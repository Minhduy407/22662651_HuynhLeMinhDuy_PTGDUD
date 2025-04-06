import { useMemo } from "react";

export default function ExpensiveCalculation({number}){
    const slowFunction = (num) => {
        for(let i = 0; i <= 1000000000; i++) {}
        return num * 2;
    }

    const calculatedValue = useMemo(() => slowFunction(number), [number]);

    return (
        <div className="flex flex-col items-center justify-center h-screen"> 
            <h2>Kết quả: {calculatedValue}</h2>
        </div>
    )
}