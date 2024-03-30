import getProducts from '@/app/actions/getProducts';
import ProductContainer from '@/components/ProductContainer';
import Link from 'next/link';

const Earphones = async () => {
  const products = await getProducts();

  const earphones = products.filter(
    (product) => product.category === 'earphone'
  );

  return (
    <div className="bg-slate-100 h-full min-h-[100vh] flex flex-col">
      <p className="pt-5 pl-3 text-3xl font-bold">Earphone</p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-5">
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
