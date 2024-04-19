'use client';

import { useCartStore } from '@/app/libs/store';
import useCartModal from '@/app/hooks/useCartModal';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CiSquarePlus } from 'react-icons/ci';
import { CiSquareMinus } from 'react-icons/ci';
import { useSession } from 'next-auth/react';

const CartModal = () => {
  const cartModal = useCartModal();
  const { data: session } = useSession();

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
      setIsLoading(true);
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: session?.user?.email,
          price: totalPrice,
          products,
        }),
      });

      const data = await res.json();
      setIsLoading(false);

      cartModal.onClose();
      router.push(`/pay/${data.id}`);
    } catch (error) {
      setIsLoading(false);
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
                    <p>$ {product.price}</p>
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
              className="bg-indigo-500 w-full px-7 py-2 rounded-xl font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <p>Check Out</p>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
