// src/components/EventManager.jsx
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, deleteEvent } from '../features/event/eventSlice';
import { useState } from 'react';

function EventManager() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const events = useSelector(state => state.event.events);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title && date) {
      dispatch(addEvent(title, date));
      setTitle('');
      setDate('');
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 mt-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Quản lý sự kiện</h2>
      <input
        type="text"
        placeholder="Tên sự kiện"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border px-2 py-1 rounded w-full mb-2"
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="border px-2 py-1 rounded w-full mb-2"
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Thêm sự kiện
      </button>

      <ul>
        {events.map(ev => (
          <li key={ev.id} className="flex justify-between items-center mb-2">
            <span>{ev.title} - {ev.date}</span>
            <button
              onClick={() => dispatch(deleteEvent(ev.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventManager;
