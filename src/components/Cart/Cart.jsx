import ItemDetail from '../ItemDetail/ItemDetail';
import './Cart.css'


function Cart() {

  const count = 5;
  const toDiscount = 16.02;
  const total = 23.98;


  return (
    <div className="container cart-cont ff-primary">
      <div>
      <p className="fs-5">SHOPPING BAG ({count})</p>
      </div>
      <div className='p-5 border'>
        <p className=' fs-5'>SUMMARY</p>
        <p >Free home delivery if you add £{toDiscount} to the shopping bag</p>
        <div className='d-flex justify-content-between mt-5'>
        <p className=' fs-5'>Subtotal</p>
        <p>€{total}</p>
        </div>
        <div className='d-flex justify-content-between'>
        <p>Delivery</p>
        <p>€{total}</p>
        </div>
        <button className='btn btn-checkout mt-5'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;

