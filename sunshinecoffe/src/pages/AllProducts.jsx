
import { ProductCard } from '../components/ProductCard/ProductCard';
import {ProductList} from '../components/ProductCard/ProductList';


export const AllProducts = () => {
  return (
    <div>
      <ProductList />
      <ProductCard/>
    </div>
  );
};

