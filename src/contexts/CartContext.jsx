import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);

const CartSupplier = ( { children } ) => {

    const [shoppingCart, setShoppingCart] = useState([])

    const clearAll = () => setShoppingCart([]);

    const prodInCart = (id) => shoppingCart.find(product => product.id === id) ? true : false;

    const removeItem = (id) => setShoppingCart(shoppingCart.filter(product => product.id !== id));

    const pushItem = (product, quantity) => {
      let newCart;
      let prod = shoppingCart.find(prod => prod.id === product.id);
        if (prod) {
          prod.quantity += quantity;
          newCart = [...shoppingCart];
        } else {
          prod = { ...product, quantity: quantity}
          newCart = [...shoppingCart, prod]
        }

      setShoppingCart(newCart)
    }

    const overallAmount = () => {
      return shoppingCart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    };

    const allArticles = () => 
      shoppingCart.reduce ((acc, currProd) => acc + currProd.quantity, 0);
    
    
    const cartQuantity = () => {
      return shoppingCart.reduce((acc, prod) => (acc += prod.quantity), 0);
    };


    console.log('Cart: ', shoppingCart);

  return (
    <CartContext.Provider value={{ 
      clearAll, 
      prodInCart, 
      removeItem, 
      pushItem, 
      cartQuantity,
      overallAmount,
      allArticles,
      shoppingCart
       }}>
        { children }
    </CartContext.Provider>
  )
}

export default CartSupplier



/* import React, { useContext, useState } from 'react'
import { createContext } from 'react';
export const CartContext = createContext([]);

/* export const useCartContext = () => useContext(CartContext) 

const CartSupplier = ( {children} ) => {

    const [shoppingCart, setShoppingCart] = useState([]);    

    const clearAll = () => setShoppingCart([]);

    const prodInCart = (id) => shoppingCart.find(product => product.id === id) ? true : false;

    const removeItem = (id) => setShoppingCart(shoppingCart.filter(product => product.id !== id));

    const pushItem = (product, newQuantity) => {
        const newCart = shoppingCart.filter(prod => prod.id !== product.id);
        newCart.push({ ...product, quantity: newQuantity });
        setShoppingCart(newCart);
    }

  return (
    <CartContext.Provider value = {{ clearAll, prodInCart, removeItem, pushItem }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartSupplier */