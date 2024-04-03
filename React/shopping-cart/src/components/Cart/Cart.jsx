import './Cart.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  console.log(cart);

  const totalQuantity = () => {
    let counter = 0;
    const amount = cart.reduce((total, obj) => {
      return obj.quantity + total;
    }, counter);
    return amount;
  }

  return (
    <section className='cart'>
      <Link to={'/cart'}>Cart</Link>
      <p className='cart__amount'>{totalQuantity()}</p>
    </section>
  );
}

export default Cart;
