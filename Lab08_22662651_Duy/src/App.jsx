
import './App.css'
import CounterReducer from './components/CounterReducer'
import CounterRedux from './components/CounterRedux'
import TodoApp from './components/ToDoApp'

function App() {


  return (
    <>
      <CounterReducer />
      <CounterRedux />
      <div className="min-h-screen bg-gray-100 p-4">
      <TodoApp />
    </div>
    </>
  )
}

export default App
