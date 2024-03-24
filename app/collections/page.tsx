import { SafeProduct } from '@/type';
import getProducts from '../actions/getProducts';
import Image from 'next/image';
import Link from 'next/link';
import ProductContainer from '@/components/ProductContainer';

const Collections = async () => {
  const products: SafeProduct[] = await getProducts();

  return (
    <div className="bg-slate-100 h-full min-h-[100vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
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
