import { useEffect } from "react"
import { useReducer } from "react"
import { useRef } from "react"

const initialState = {time : 0,isRunning : false}

const reducer = (state, aciton) => {
    switch(aciton.type){
        case "START":
            return {...state, isRunning : true}
        case "STOP":
            return {...state, isRunning : false}
        case "RESET":
            return {time : 0, isRunning : false}
        case "TICK":
            return {...state, time : state.time + 1}
        default:
            return state
    }
}

export default function StopWatchReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    let timer = useRef(null)
    useEffect(()=>{
        
        if(state.isRunning){
            timer.current = setInterval(() =>{
                dispatch({type : "TICK"})
            },1000)
        }
            return () => clearInterval(timer.current)
    }, [state.isRunning])

    return(
        <div className="text-center p-4">
            <h1 className="text-3xl font-bold">{state.time}s</h1>
            <div className="mt-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded mr-2" onClick={() => dispatch({ type: "START" })}>START</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded mr-2" onClick={() => dispatch({ type: "STOP" })}>STOP</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={() => dispatch({ type: "RESET" })}>RESET</button>
            </div>
        </div>
    )
}