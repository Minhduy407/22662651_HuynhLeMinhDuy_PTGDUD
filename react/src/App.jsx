import { Route, Routes, Link, useParams, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import "./App.css";

import Home from './components/Home';



function BookDetails({ addToCart }) {
  const [book, setBook] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://67dfb5677635238f9aaa6973.mockapi.io/api/v1/book/Book/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
  }, [id]);

  if (!book) return <h5 className="text-red-500">Book not found!</h5>;

  return (
    <div className="p-4">
      <p className="text-2xl font-bold">{book.title}</p>
      <img src={book.image} alt={book.title} className="w-100 h-70 mx-auto mb-4" />
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-blue-500 font-bold">Price: ${book.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" onClick={() => addToCart(book)}>Thêm vào giỏ hàng</button>
    </div>
  );
}

function Cart({ cart, removeFromCart }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('https://67dfb5677635238f9aaa6973.mockapi.io/api/v1/book/Book')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, []);
  const totalPrice = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className='grid grid-cols-5 gap-4'>
      {cart.length === 0 ? <p>Your cart is empty!</p> : cart.map((book, index) => (
        <div key={index} className="cart-item border p-2 mb-2 rounded">
          <img src={book.image} alt={book.title} className="w-100 h-50 mx-auto mb-2" />
          <h3 className="font-semibold">{book.title}</h3>
          <p className="text-blue-500">Price: ${book.price}</p>
          <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700" onClick={() => removeFromCart(index)}>Xóa</button>
        </div>
      ))}
      </div>
      <h2 className="font-bold mt-4">Total: ${totalPrice}</h2>
      <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700" onClick={() => alert('Cảm ơn bạn đã mua hàng')}>Thanh toán</button>
    </div>
  );
}

function NotFound() {
  return <h1 className="text-red-500 text-center text-2xl">404 - Page Not Found</h1>;
}

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToCart = (book) => setCart([...cart, book]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  return (
    <>
      <div className='bg-amber-100'>
      {location.pathname !== "*" && (
        <nav className="bg-gray-800 p-4 text-white">
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/cart" className="hover:underline">Cart ({cart.length})</Link>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/book/:id" element={<BookDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
