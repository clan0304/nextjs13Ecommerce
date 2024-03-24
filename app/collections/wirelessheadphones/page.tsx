import getProducts from '@/app/actions/getProducts';
import ProductContainer from '@/components/ProductContainer';
import Image from 'next/image';
import Link from 'next/link';

const WirelessHeadphones = async () => {
  const products = await getProducts();

  const wirelessHeadphones = products.filter(
    (product) => product.category === 'wirelessHeadphone'
  );

  return (
    <div className="bg-slate-100 h-[100vh]">
      <p className="pt-5 pl-3 text-3xl font-bold">Wireless Headphone</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-5">
        {wirelessHeadphones.map((item) => (
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

export default WirelessHeadphones;
