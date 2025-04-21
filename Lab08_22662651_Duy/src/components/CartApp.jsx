import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../features/cart/cartSlice';

const sampleProducts = [
  { id: 1, name: 'iPhone 15', price: 1200 },
  { id: 2, name: 'AirPods Pro', price: 250 },
];

export default function CartApp() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 border rounded bg-gray-500 shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🛒 Giỏ hàng</h2>

      <div className="mb-4">
        {sampleProducts.map(product => (
          <div key={product.id} className="flex justify-between mb-2">
            <span>{product.name} - ${product.price}</span>
            <button
              onClick={() => dispatch(addItem(product))}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Thêm
            </button>
          </div>
        ))}
      </div>

      <h3 className="font-semibold mb-2">Sản phẩm đã chọn:</h3>
      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                  }
                  className="w-16 border mr-2"
                />
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Xoá
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 font-bold">Tổng: ${total}</div>
    </div>
  );
}
