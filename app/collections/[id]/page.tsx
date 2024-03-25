import getProduct from '@/app/actions/getProduct';
import Price from '@/components/Price';
import { SafeProduct } from '@/type';
import Image from 'next/image';
import { IoMdArrowDropright } from 'react-icons/io';

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
    <div className="flex flex-col h-full items-center sm:flex-row gap-x-14 gap-y-10 w-full sm:items-start mt-10 px-5 md:gap-20 pb-10">
      <div className="flex relative w-3/5 sm:w-1/2 md:w-1/3 aspect-[1/1]">
        <Image src={product.image} alt="Product Image" fill objectFit="cover" />
      </div>
      <div className="w-3/5 flex flex-col gap-3 ">
        <p className="font-rubik font-bold text-2xl">{product.name}</p>
        <p>$ {product.price}</p>
        <div className="flex flex-col gap-3 mt-5">
          <p className="font-semibold text-lg">KEY FEATURES</p>
          {product.descriptions.map((item, index) => (
            <div key={index} className="flex gap-2">
              * {item}
            </div>
          ))}
        </div>
        <Price product={product} />
      </div>
    </div>
  );
};

export default ProductById;
