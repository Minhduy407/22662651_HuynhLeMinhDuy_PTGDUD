import './App.css'
import CounterReducer from './components/CounterReducer'
import CounterRedux from './components/CounterRedux'
import TodoApp from './components/ToDoApp'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './features/theme/themeSlice'
import './index.css'
import CartApp from './components/CartApp'
import AuthApp from './components/AuthApp'

import UserApp from './components/UserApp'
import AdvancedCounter from './components/AdvancedCounter'
import BmiForm from './components/BmiForm'

function App() {
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch()

  return (
    <div className={`min-h-screen p-4 transition-all duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="mb-4 px-4 py-2 rounded bg-blue-500 text-white"
      >
        Toggle Theme
      </button>

      <CounterReducer />
      <CounterRedux />
      <TodoApp />
      <CartApp />
      <AuthApp />
      <UserApp />
      <AdvancedCounter />
      <BmiForm />
    </div>
  )
}

export default App
