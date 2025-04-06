import React from 'react'
import './App.css'
import Counter from './components/Counter'
import CounterComponent from './components/CounterComponent'
import CounterReducer from './components/CounterReducer'
import Parent from './components/Parent'
import ExpensiveCalculation from './components/ExpensiveCalculation'
import ParentUseCallback from './components/ParentUseCallback'
import StopWatch from './components/StopWatch'
import StopWatchReducer from './components/StopWatchReducer'

function App() {
  // Example of useMemo
  const [count, setCount] = React.useState(0);
  const [number, setNumber] = React.useState(0);


  return (
    <>
      <div>
        <h1>Ứng dụng đếm số</h1>
        {/* <Counter /> */}
        {/* <CounterReducer /> */}
        {/* <CounterComponent /> */}
        {/* <Parent /> */}

        {/* */}
        {/* <h1>USE MEMO EXAMPLE</h1>
        <button onClick={()=>setCount(count + 1)}>Tăng count {count}</button>
        <button onClick={()=>setNumber(number + 1)}>Tăng number {number}</button>
        <ExpensiveCalculation number={number} /> */}
        {/* */}
        
        {/*USE MEMO EXAMPLE*/}
        <ParentUseCallback />
        {/* USE CALL BACK EXAMPLE*/}
        {/* <StopWatchReducer /> */}
      </div>
    </>
  )
}

export default App
