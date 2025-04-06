import { useRef } from "react";
import { useState } from "react";

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let timer = useRef(null);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            timer.current = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
    };

    const stop = () => {
        setIsRunning(false);
        clearInterval(timer.current);
    };

    const reset = () => {
        setIsRunning(false);
        clearInterval(timer.current);
        setTime(0);
    };

    return (
        <div className="text-center p-4">
            <h1 className="text-3xl font-bold">{time}s</h1>
            <div className="mt-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded mr-2 cursor-pointer" onClick={start}>START</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded mr-2 cursor-pointer" onClick={stop}>STOP</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer" onClick={reset}>RESET</button>
            </div>
        </div>
    )

}