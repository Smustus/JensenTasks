import { useParams } from "react-router-dom";
import image from '../../assets/NoImage.jpg';
import './Product.css';
import { useEffect, useState } from "react";
import productJSON from "../Products/products.json";

function Product(props){

  const { id } = useParams();
  console.log(id);

  const data = productJSON.products

  const [product, setProduct] = useState({});
  const [propData, setPropData] = useState({title: props.title, price: props.price, description: props.description});

  useEffect(() => {
    if(data){
      const element = data.find((obj) => parseInt(obj.id) === parseInt(id));
      console.log(element);
      if(element){
        setProduct(element);
      }
    }
  }, [data, id]);

  useEffect(() => {
    if(props){
      const { objData } = props;
      console.log(objData);
      setPropData(objData)
    }
  }, [props]);

  return(
    <>    
      <section className="product">
      <img src={image} alt="" srcset="" />
      <h3 className="product__title">{ Object.keys(product).length > 1 ? product.title : propData.title }</h3>
      <p className="product__price">{ Object.keys(product).length > 1 ? product.price : propData.price }</p>
      <p className="product__text">{ Object.keys(product).length > 1 ? product.description : propData.title }</p>
      </section>
    </>

  );
}

export default Product;

