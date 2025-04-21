
import { useDispatch, useSelector } from "react-redux"
import { incrementByAmount, reset } from "../features/counter/counterSlice"
import { useState } from "react"

export default function AdvancedCounter() {
  const count = useSelector((state) => state.counteradvance.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  const handleChange = (e) => {
    setAmount(Number(e.target.value))
  }

  return (
    <div className="my-4 p-4 border rounded shadow bg-white dark:bg-gray-600 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Bài 7: Counter nâng cao</h2>
      <p className="text-lg mb-2">Giá trị hiện tại: <strong>{count}</strong></p>

      <div className="flex items-center gap-2 mb-2">
        <input
          type="number"
          value={amount}
          onChange={handleChange}
          className="border px-2 py-1 rounded text-black"
          placeholder="Nhập số"
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Tăng theo số nhập
        </button>
      </div>

      <button
        onClick={() => dispatch(reset())}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Reset
      </button>
    </div>
  )
}
