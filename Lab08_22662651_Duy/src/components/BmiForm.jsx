// src/components/BmiForm.jsx
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, calculateBMI } from '../features/bmi/bmiSlice';

function BmiForm() {
  const dispatch = useDispatch();
  const { weight, height, result, status } = useSelector(state => state.bmi);

  const handleChange = (e) => {
    dispatch(updateInput({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div className="bg-white shadow rounded p-4 max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Tính BMI</h2>

      <div className="mb-2">
        <label className="block">Cân nặng (kg):</label>
        <input
          name="weight"
          value={weight}
          onChange={handleChange}
          className="border rounded w-full px-2 py-1"
        />
      </div>

      <div className="mb-2">
        <label className="block">Chiều cao (cm):</label>
        <input
          name="height"
          value={height}
          onChange={handleChange}
          className="border rounded w-full px-2 py-1"
        />
      </div>

      <button
        onClick={() => dispatch(calculateBMI())}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Tính BMI
      </button>

      {result && (
        <div className="mt-4">
          <p><strong>BMI:</strong> {result}</p>
          <p><strong>Phân loại:</strong> {status}</p>
        </div>
      )}
    </div>
  );
}

export default BmiForm;
