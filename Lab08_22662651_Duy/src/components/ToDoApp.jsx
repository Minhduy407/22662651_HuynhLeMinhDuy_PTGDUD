import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../features/todo/todoSlice';

export default function ToDoApp() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">To-do List</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-grow"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Thêm</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            <span
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500">Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
