import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartItem = () => {
  const { cartItems = [], addToCart, removeFromCart, decreaseQuantity } = useCart(); // Added default value
  const navigate = useNavigate();

  const total = cartItems?.reduce((acc, item) => acc + (item.price * item.quantity || 0), 0) || 0;

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  if (!Array.isArray(cartItems)) {
    return <div className="text-center p-8">Loading cart...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center mt-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-32 h-32 mx-auto mb-6 opacity-60"
          />
          <p className="text-gray-500 text-lg">Your cart is empty. Start adding some cool gadgets!</p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 border p-4 rounded-lg shadow-sm bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-md border"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">₹{item.price} each</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => decreaseQuantity(item.id)} // Changed to decreaseQuantity
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold text-rose-600">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-white bg-rose-500 px-3 py-1 rounded hover:bg-rose-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right border-t pt-6 space-y-4">
            <h2 className="text-xl font-semibold">Total: ₹{total.toFixed(2)}</h2>
            <button
              onClick={handleCheckout}
              className="px-6 py-2 text-white rounded-md bg-rose-600 hover:bg-rose-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;