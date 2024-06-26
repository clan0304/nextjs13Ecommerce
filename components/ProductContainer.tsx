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
    <div className="flex group grow w-9/10 px-3 flex-col mx-3 gap-2 bg-white rounded-xl py-5">
      <div className="relative self-center w-4/5 aspect-[1/1] rounded-lg ">
        <Image
          src={image}
          alt="Product Image"
          fill
          objectFit="cover"
          className="rounded-lg group-hover:scale-110"
        />
      </div>
      <div className="pl-3 flex flex-col gap-3">
        <p className="font-rubik font-semibold text-sm xs:text-md lg:text-lg min-h-[120px] md:min-h-[140px] pt-8 hover:underline">
          {name}
        </p>
        <p>$ {price} AUD</p>
      </div>
    </div>
  );
};

export default ProductContainer;
