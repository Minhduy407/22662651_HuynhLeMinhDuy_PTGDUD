import { Route, Routes, Link, useParams, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
export default function Home({ addToCart }) {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      fetch('https://67dfb5677635238f9aaa6973.mockapi.io/api/v1/book/Book')
        .then(response => response.json())
        .then(data => setBooks(data))
    }, []);
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 bg-amber-500">Book List</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map(book => (
            <div key={book.id} className="border p-4 text-center shadow-lg rounded-lg">
              <img src={book.image} alt={book.title} className="w-70 h-50 mx-auto mb-2" />
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-blue-500 font-bold">Price: ${book.price}</p>
              <Link to={`/book/${book.id}`} className="text-blue-700 underline block my-2">Xem chi tiết</Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => addToCart(book)}>Thêm vào giỏ hàng</button>
            </div>
          ))}
        </div>
      </div>
    );
  }