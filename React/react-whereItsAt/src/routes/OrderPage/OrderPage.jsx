import './OrderPage.css';
import { Link } from 'react-router-dom'

function OrderPage(props){

  const { clickedEvent } = props;
  console.log(clickedEvent);

  return(
    <section className='orderPage'>
      <p className="orderPage__infoText">You are about to score some tickets to</p>
      <div>
        <h2 className="orderPage__artist">{ clickedEvent.name }</h2>
        <p className="orderPage__dateAndTime">{clickedEvent.when.date}&nbsp;kl.&nbsp;{clickedEvent.when.from}&nbsp;-&nbsp;{clickedEvent.when.to}</p>
        <p className="orderPage__location">@&nbsp;{ clickedEvent.where }</p>
      </div>
      <h3 className="orderPage__price">{ clickedEvent.price }&nbsp;sek</h3>
      <Link to={ '/tickets' }><button className="orderBtn">Beställ</button></Link>
    </section>
  );
}

export default OrderPage;