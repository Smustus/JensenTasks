import './Products.css';
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import productJSON from "./products.json";

function Products(){

  const data = productJSON.products;
  console.log(data);

  const products = data.map((obj) => {
    console.log(obj);
    return  <Link key={obj.id} to={`product/${obj.id}`}>
              <Product key={obj.id} objData={obj} />
            </Link>
  });

  return(
    <>
      <section className="productSection">
        { products }
      </section>
    </>
  );
}

export default Products;