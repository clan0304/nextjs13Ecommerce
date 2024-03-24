import { SafeProduct } from '@/type';

import getPopularProducts from '../actions/getPopularProducts';
import ProductContainer from '@/components/ProductContainer';
import Link from 'next/link';

const BestSeller = async () => {
  const popularProducts: SafeProduct[] = await getPopularProducts();

  return (
    <div className="flex flex-col items-center gap-3 w-full text-center bg-slate-100 py-5 px-3">
      <div className="self-center pt-24">
        <p>What&apos;s the best?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full gap-x-3 gap-y-3 pt-5 text-left place-contents-center">
        {popularProducts.map((item) => (
          <Link href={`/collections/${item.id}`} key={item.id}>
            <ProductContainer
              className="md:pl-3"
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

export default BestSeller;
