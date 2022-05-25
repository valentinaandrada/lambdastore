import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  function isInCart(id) {
    return cartList.some((item) => item.id === id);
  }

  function addToCart(item) {
    if (isInCart(item.id)) {
      const newCart = cartList;

      let i = newCart.findIndex((i) => i.id === item.id);
      newCart[i].quantity += item.quantity;

      updateCart(newCart);
    } else {
      updateCart([...cartList, item]);
    }
  }

  function clearCart() {
    updateCart([]);
  }

  function removeItem(item, quantity) {
    const newCart = [...cartList];
    let index = newCart.findIndex((prod) => prod.id === item.id);
    if ( quantity > 1) {
      item.quantity = quantity -1;
      updateCart([...newCart]);
    } else {
      newCart.splice(index, 1);
      updateCart([...newCart])
    }
  }

  function updateCart(list) {
    setCartList(list);
    setTotalItems(list.map((item) => item.quantity).reduce((a, b) => a + b, 0));
    setTotalAmount(
      list.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        removeItem,
        totalItems,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
