import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductInfo() {
    const params = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        function filterProduct(products) {
            const filteredProduct = products.filter((product) => {
                if (product.title === params.name) return product;
            });

            console.log(filteredProduct);
            setProduct(filteredProduct[0]);
        }

        async function getProducts() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            filterProduct(data.products);
          }
      
          getProducts();
    }, []);

    

    return (
        <>
        { product ? // ternary operator
            <section>
                <img src={ product.images[0]} />
                <h2>{ product.title }</h2>
                <p>{ product.description }</p>
                <p>Pris: { product.price }</p>
            </section> 
            : <h2>Ingen produkt vald</h2>
        }
        </>
    )
}

export default ProductInfo;