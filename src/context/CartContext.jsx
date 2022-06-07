import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderID, setOrderID] = useState();

  function isInCart(id) {
    return cartList.some((item) => item.id === id);
  }

  function addToCart(item) {
    if (isInCart(item.id)) {
      const newCart = cartList;
      let index = newCart.findIndex((prod) => prod.id === item.id);
      newCart[index].quantity += item.quantity;
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
    let i = newCart.findIndex((prod) => prod.id === item.id);
    if (quantity > 1 && quantity) {
      item.quantity = quantity - 1;
      updateCart([...newCart]);
    } else {
      newCart.splice(i, 1);
      updateCart([...newCart]);
    }
  }

  function updateCart(list) {
    setCartList(list);
    setTotalItems(
      list.reduce((counter, item) => (counter += item.quantity), 0)
    );
    setTotalAmount(
      list.reduce((counter, item) => counter + item.price * item.quantity, 0)
    );
  }

  async function createOrder(customer) {
    let order = {};

    order.customer = customer;
    order.total = totalAmount;
    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const quantity = cartItem.quantity;
      const price = (cartItem.price * quantity).toFixed(2);
      return { id, name, quantity, price };
    });

    const db = getFirestore();

    // CREATE ORDER
    const queryCollectionOrders = collection(db, "orders");
    addDoc(queryCollectionOrders, order)
      .then((res) => setOrderID(res.id))
      .catch((err) => console.log(err))
      .finally(() => clearCart());

    // UPDATE STOCK
    const queryCollectionProducts = collection(db, "products");
    const updateStock = query(
      queryCollectionProducts,
      where(
        documentId(),
        "in",
        cartList.map((item) => item.id)
      )
    );
    const batch = writeBatch(db);

    await getDocs(updateStock)
      .then((res) =>
        res.docs.forEach((resp) =>
          batch.update(resp.ref, {
            stock:
              resp.data().stock -
              cartList.find((item) => item.id === resp.id).quantity,
          })
        )
      )
      .finally(() => console.log("stock updated"));

    batch.commit();
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
        createOrder,
        orderID,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
