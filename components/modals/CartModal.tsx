'use client';

import { useCartStore } from '@/app/libs/store';
import useCartModal from '@/app/hooks/useCartModal';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CiSquarePlus } from 'react-icons/ci';
import { CiSquareMinus } from 'react-icons/ci';

const CartModal = () => {
  const cartModal = useCartModal();
  const {
    products,
    totalPrice,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price: totalPrice,
          products,
        }),
      });

      const data = await res.json();

      cartModal.onClose();
      router.push(`/pay/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {cartModal.isOpen && (
        <div className="z-50 w-full sm:w-3/4 px-5 h-[100vh] fixed top-0 right-0 flex justify-center flex-col bg-orange-100">
          <div className="flex absolute top-2 right-2 justify-end pr-3">
            <IoMdClose
              size={25}
              className="hover:cursor-pointer mt-5"
              onClick={cartModal.onClose}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex w-full bg-white gap-3 rounded-lg pr-2"
              >
                <div className="relative w-1/5 min-w-[70px] aspect-[1/1] rounded-lg">
                  <Image
                    src={product.image}
                    alt="Product"
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-2/5 flex items-center text-xs sm:text-sm md:text-lg">
                  {product.name}
                </div>
                <div className="flex items-center  justify-end sm:justify-center w-1/5 sm:w-2/5 flex-col sm:flex-row sm:gap-5">
                  <div className="flex flex-col sm:justify-between gap-2 my-3  items-center">
                    <p>$ {product.price}</p>
                    <div className="flex gap-1 items-center">
                      <CiSquareMinus
                        size={25}
                        onClick={() => decrementQuantity(product.id)}
                        className="hover:cursor-pointer"
                      />
                      {product.quantity}
                      <CiSquarePlus
                        size={25}
                        onClick={() => incrementQuantity(product.id)}
                        className="hover:cursor-pointer"
                      />
                    </div>
                  </div>
                  <div
                    className="mb-2 text-red-600 hover:underline hover:cursor-pointer"
                    onClick={() => removeFromCart(product)}
                  >
                    Remove
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between my-3 mx-3 font-semibold font-xl">
            <p>Total</p>
            <p>$ {totalPrice}</p>
          </div>
          <div className="flex justify-end items-end mt-5">
            <button
              onClick={handleCheckout}
              className="bg-indigo-500 px-7 py-2 rounded-xl font-semibold"
              disabled={isLoading}
            >
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
