import { createBrowserRouter } from 'react-router-dom';

import Products from '../pages/Products';
import ProductInfo from '../pages/ProductInfo';
import Order from '../pages/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/produkt/:name', //Dynamisk url där :name ersätts med något
    element: <ProductInfo />,
  },
  {
    path: '/cart',
    element: <Order />,
  },
]);

export default router;
