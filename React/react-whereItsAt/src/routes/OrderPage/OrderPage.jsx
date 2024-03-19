import './OrderPage.css';
import { Link, useLocation } from 'react-router-dom'

function OrderPage(){

  const { state } = useLocation();
  console.log(state.data);

  return(
    <section className='orderPage'>
      <p className="orderPage__infoText">You are about to score some tickets to</p>
      <div>
        <h2 className="orderPage__artist">{ state.data.name }</h2>
        <p className="orderPage__dateAndTime">{state.data.when.date}&nbsp;kl.&nbsp;{state.data.when.from}&nbsp;-&nbsp;{state.data.when.to}</p>
        <p className="orderPage__location">@&nbsp;{ state.data.where }</p>
      </div>
      <h3 className="orderPage__price">{ state.data.price }&nbsp;sek</h3>
      <Link to={ '/tickets' } state={{ data: state.data }}><button className="orderBtn">Beställ</button></Link>
    </section>
  );
}

export default OrderPage;