import CounterRedux from './CounterRedux';
import AdvancedCounter from './AdvancedCounter';
import TodoApp from './ToDoApp';
import Cart from './CartApp';
import LoginForm from './AuthApp';
import UserInfo from './UserApp';
import EventManager from './EventManager';
import BmiForm from './BmiForm';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

function Dashboard() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen p-4 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📊 Redux Toolkit Dashboard</h1>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Toggle Theme
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <CounterRedux />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <AdvancedCounter />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow md:col-span-2">
          <TodoApp />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <Cart />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <LoginForm />
          <UserInfo />
        </div>
        <div className='bg-white dark:bg-gray-800 p-4 rounded shadow md:col-span-2'>
            <BmiForm/>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow md:col-span-2">
          <EventManager />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
