import getProducts from '@/app/actions/getProducts';
import ProductContainer from '@/components/ProductContainer';
import Image from 'next/image';
import Link from 'next/link';

const Earphones = async () => {
  const products = await getProducts();

  const earphones = products.filter(
    (product) => product.category === 'earphone'
  );

  return (
    <div className="bg-slate-100 h-[100vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-5">
        {earphones.map((item) => (
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

export default Earphones;
