// Context
import { useCartContext } from "../../context/CartContext";
// Components
import CartItem from "../CartItem/CartItem";

function CartList() {
  const { cartList } = useCartContext();

  return cartList.map((item) => (
    <CartItem key={item.id} item={item} quantity={item.quantity} />
  ));
}

export default CartList;
