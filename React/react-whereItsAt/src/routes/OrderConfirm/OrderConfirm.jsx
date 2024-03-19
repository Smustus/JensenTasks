import './OrderConfirm.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function OrderConfirm(props){

  const { clickedEvent } = props;
  console.log(clickedEvent);


  return(
    <section className='orderConfPage'>
      <h2 className='orderConfPage__msg'>Tack för din beställning</h2>
      <article className="orderConfPage__orderInfo">
        <section className="orderInfo__artist">
          <p>WHAT</p>
          <h2>{ clickedEvent.name }</h2>
        </section>
        <section className="orderInfo__location">
          <p>WHERE</p>
          { clickedEvent.where }
        </section>
        <section className="orderInfo__time">
          <div className="time__date">
            <p>WHEN</p>
            { clickedEvent.when.date }
          </div>
          <div className="time__from">
            <p>FROM</p>
            { clickedEvent.when.from }
          </div>
          <div className="time__to">
            <p>TO</p>
            { clickedEvent.when.to }
          </div>
        </section>
      </article>
      <Link to={ '/' }>To Start</Link>
    </section>
  );
}

export default OrderConfirm;