import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);

  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  return ( <>
    <div> <Navbar/> </div>
    <div> Cart Page </div>
        
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>Products</h2>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li className="list-group-item" key={item.id}>
                {item.name} - ${item.price}
                <button
                  className="btn btn-danger btn-sm float-right"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Cart</h2>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li className="list-group-item" key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <strong>Total: ${total}</strong>
          </div>
          <button className="btn btn-primary mt-3" onClick={calculateTotal}>
            Calculate Total
          </button>
        </div>
      </div>
    </div>
    <div><Footer /></div>
    </>
  );
}

export default Cart;
