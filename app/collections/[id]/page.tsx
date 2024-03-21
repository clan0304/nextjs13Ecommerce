import getProduct from '@/app/actions/getProduct';
import Price from '@/components/Price';
import { SafeProduct } from '@/type';
import Image from 'next/image';

interface IParams {
  params: { id: string };
}

const ProductById = async ({ params }: IParams) => {
  const { id } = params;
  const product: SafeProduct | null = await getProduct(id);

  if (!product) {
    return <div>This product is unavailable.</div>;
  }

  return (
    <div className="flex gap-5 w-full items-start  h-[100vh] mt-20 px-5">
      <div className="flex relative w-1/2 aspect-[1/1]">
        <Image src={product.image} alt="Product Image" fill objectFit="cover" />
      </div>
      <div className="w-1/2 flex flex-col gap-3 ">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.descriptions}</p>
        <Price product={product} />
      </div>
    </div>
  );
};

export default ProductById;
