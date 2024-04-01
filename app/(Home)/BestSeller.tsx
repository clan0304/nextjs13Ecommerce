import { SafeProduct } from '@/type';

import getPopularProducts from '../actions/getPopularProducts';
import ProductContainer from '@/components/ProductContainer';
import Link from 'next/link';

const BestSeller = async () => {
  const popularProducts: SafeProduct[] = await getPopularProducts();

  return (
    <div className="flex flex-col items-center gap-3 w-full text-center bg-slate-100 py-5 px-3">
      <div className="pt-10 text-3xl font-extrabold lg:text-5xl font-rakkas tracking-wider">
        <p>What&apos;s the best?</p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full gap-x-3 gap-y-10 pt-5 text-left place-contents-center">
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
