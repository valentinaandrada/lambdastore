import { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  
  function isInCart(id) {
    return cartList.some(item => item.id === id);
  }
  
  function addToCart(item) {
    if (isInCart(item.id)) {
      const newCart = cartList;
      
      let i = newCart.findIndex(i => i.id === item.id);
      newCart[i].quantity += item.quantity;
        
      setCartList(newCart)
      } else {
        setCartList( [
          ...cartList,
          item
        ] );
      }
  }

  function clearCart() {
    setCartList([]);
  }

  function deleteItem(item) {
    const newCart = [...cartList]
    let i = newCart.findIndex(i => i.id === item.id);
    newCart.splice(i,1);
    setCartList(newCart);
  }

  return(
    <CartContext.Provider value={{
      cartList,
      addToCart, 
      clearCart,
      deleteItem
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;