import './OrderConfirm.css';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function OrderConfirm(){

  const { state } = useLocation();

  return(
    <section className='orderConfPage'>
      <h2 className='orderConfPage__msg'>Tack för din beställning</h2>
      <article className="orderConfPage__orderInfo">
        <section className="orderInfo__artist">
          <p>WHAT</p>
          <h2>{ state.data.name }</h2>
        </section>
        <section className="orderInfo__location">
          <p>WHERE</p>
          { state.data.where }
        </section>
        <section className="orderInfo__time">
          <div className="time__date">
            <p>WHEN</p>
            { state.data.when.date }
          </div>
          <div className="time__from">
            <p>FROM</p>
            { state.data.when.from }
          </div>
          <div className="time__to">
            <p>TO</p>
            { state.data.when.to }
          </div>
        </section>
      </article>
      <Link to={ '/' }>To Start</Link>
    </section>
  );
}

export default OrderConfirm;