import './Product.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducers/cartReducer';

function Product(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //console.log(props);

  function handleClick() {
    const item = {
      title: props.title,
      price: props.price,
      quantity: 1, // En ny egenskap som heter quantity som kommer ändras om fler av samma produkt läggs till eller minska om samma produkt tas bort
      id: props.id,
    };

    dispatch(addToCart(item));
  }

  function goToProductInfo() {
    navigate(`/produkt/${props.title}`);
  }

  return (
    <article className='product'>
      <img src={props.image} alt='' className='product__image' />
      <h2 className='product__title'>{props.title}</h2>
      <p className='product__price'>{props.price} kr</p>
      <footer className='product__buttons'>
        <button onClick={handleClick} className='product__button'>
          Add to cart
        </button>
        <button onClick={goToProductInfo} className='product__button'>
          Se mer info
        </button>
      </footer>
    </article>
  );
}

export default Product;
