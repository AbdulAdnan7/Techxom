import { createContext, useContext, useState, useEffect } from "react";
import Products from "../Components/Products";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {

    const savedCart  = localStorage.getItem('cartItems');
    if(savedCart) {
      const parsed = JSON.parse(savedCart)
     if(Array.isArray(parsed) && parsed.every(item => item.id && item.quantity)) {
      return parsed
     }
    }
  } catch (err) {
    console.error('Error Parsing LocalStorage:', err);
  }
  return []
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    console.log('saved', cartItems)
  }, [cartItems]);

  const addToCart = (product) => {
    if(!product?.id) {
      console.error('Invalid Product:', product);
      return
    }

     console.log("Adding to cart:", product.id);


    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if(existing) {
        return prev.map((item) => {
        return  item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      })
      } else {
        return [...prev, {...product, quantity: 1}]
      }
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }


  const decreaseQuantity = (id) => {
    setCartItems((prev) =>  prev.map((item) => {
      if (item.id === id) {
            const newQuantity = item.quantity - 1;
            return newQuantity > 0 
              ? {...item, quantity: newQuantity}
              : null;
          }
          return item;
        })
        .filter(Boolean)
      )
  }

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, decreaseQuantity}} >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)