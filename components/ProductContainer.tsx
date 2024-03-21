import Image from 'next/image';
import React from 'react';

interface ContainerProps {
  image: string;
  name: string;
  price: number;
  className?: string;
}

const ProductContainer = ({
  image,
  name,
  price,
  className,
}: ContainerProps) => {
  return (
    <div className="flex w-4/5 pl-5 pr-2 flex-col mx-3 gap-2 bg-white rounded-xl">
      <div className="relative  aspect-[1/1] rounded-lg">
        <Image
          src={image}
          alt="Product Image"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-rubik font-semibold text-lg min-h-[60px] sm:min-h-[100px] lg:min-h-[120px] pt-5">
          {name}
        </p>
        <p>$ {price} AUD</p>
      </div>
    </div>
  );
};

export default ProductContainer;
