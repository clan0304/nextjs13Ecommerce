import { SafeProduct } from '@/type';
import getProducts from '../actions/getProducts';
import Link from 'next/link';
import ProductContainer from '@/components/ProductContainer';

const Collections = async () => {
  const products: SafeProduct[] = await getProducts();

  return (
    <div className="bg-slate-100 h-full min-h-[100vh] pb-5">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-5">
        {products.map((item) => (
          <Link key={item.id} href={`/collections/${item.id}`}>
            <ProductContainer
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collections;
