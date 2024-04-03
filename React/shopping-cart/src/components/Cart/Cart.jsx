import './Cart.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  console.log(cart);

  return (
    <section className='cart'>
      <Link to={'/cart'}>Cart</Link>
      <p className='cart__amount'>{cart.length}</p>
    </section>
  );
}

export default Cart;
