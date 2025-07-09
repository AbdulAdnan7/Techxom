import { Children, createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({Children}) => {
   const [cartItems, setCartItems] = useState([]);

   const addToCart = (product) => {
    setCartItems(prev => {
        const existingItem = prev.find(item => item.id === product.id);
        if(existingItem) {
            return prev.map(item => {
                item.id === product.id ? {...item, quantity: item.quantity+1} : item
            })
        } else {
            return [...prev, {...product, quantity: 1}]
        }
    })
   }
   return (
    <CartContext.Provider value={{cartItems, addToCart}} >
        {Children}
    </CartContext.Provider>
   )
}

export const UseCart = () => useContext(CartContext)
