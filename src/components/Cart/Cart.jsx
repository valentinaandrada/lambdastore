import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css'


function Cart() {

  const { cartList, clearCart, deleteItem } = useCartContext();


  const totalQuantity = cartList.map(item => item.quantity).reduce((a, b) => a + b, 0);
  const subTotal = cartList.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);
  const delivery = subTotal < 40 ? 3.90 : 0.00;
  const total = subTotal + delivery;

  return (
    <div className="container cart-cont ff-primary">
      <div>
      <p className="fs-5 mb-4">SHOPPING BAG <span className='text-secondary'>({totalQuantity})</span> </p>
      {cartList.map(item => <CartItem item={item} quantity={item.quantity} del={deleteItem}/>)}
      <button onClick={clearCart} className='btn'>Clear Cart</button>
      </div>
      <div className='p-5 border'>
        <p className=' fs-5'>SUMMARY</p>
        <p> { subTotal < 40 ? `Free home delivery if you add € ${40-subTotal} to the shopping bag` : `Free home delivery on your purchase`}</p>
        <div className='d-flex justify-content-between mt-5'>
        <p className=' fs-5'>Subtotal</p>
        <p>€ {subTotal}</p>
        </div>
        <div className='d-flex justify-content-between'>
        <p>Delivery</p>
        <p>€ {delivery}</p>
        </div>
        <div className='d-flex justify-content-between mt-5'>
        <p className=' fs-5'>Total</p>
        <p>€ {total}</p>
        </div>
        <button className='btn btn-checkout mt-5'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;

