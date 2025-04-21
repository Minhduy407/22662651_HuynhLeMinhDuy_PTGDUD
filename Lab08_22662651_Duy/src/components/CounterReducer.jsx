import { useReducer } from "react"

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREASE":
            return {count : state.count + 1}
        case "DECREASE":
            return {count : state.count - 1}
        case "RESET":
            return {count : 0}
        default:
            return state
    }
}
export default function CounterReducer() {
    const [state,dispatch] = useReducer(reducer,{count: 0});

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h2>Giá trị: {state.count}</h2>
            <button onClick={() => dispatch({type : "INCREASE"})}>Tăng</button>
            <button onClick={() => dispatch({type : "DECREASE"})}>Giảm</button>
            <button onClick={() => dispatch({type : "RESET"})}>Reset</button>
        </div>
    )
}