import './Order.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';

function Order() {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const cartItemComponents = cart.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  function sum() {
    // Räknar ut totalsumman av alla produkter
    const initialValue = 0;
    const total = cart.reduce((total, item) => {
      return item.price + total;
    }, initialValue);

    return total;
  }

  return (
    <section className='order'>
      <h2>Cart</h2>
      <section className='order__summary'>
        {cartItemComponents}
        <p>Summa: {sum()} kr</p>
      </section>
      <Link to='/'>Tillbaka till produkter</Link>
    </section>
  );
}

export default Order;
