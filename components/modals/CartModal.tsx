'use client';

import { useCartStore } from '@/app/libs/store';
import useCartModal from '@/app/hooks/useCartModal';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CartModal = () => {
  const cartModal = useCartModal();
  const { products, totalPrice, removeFromCart } = useCartStore();
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
      console.log(data);
      router.push(`/pay/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products);
  return (
    <div>
      {cartModal.isOpen && (
        <div className="z-50 w-full md:w-1/2 h-[100vh] bg-blue-500 fixed top-0 right-0 flex justify-center flex-col">
          <div className="flex justify-end mr-3">
            <IoMdClose size={20} onClick={cartModal.onClose} />
          </div>
          <div className="flex flex-col h-[80vh] w-full gap-5">
            {products.map((product) => (
              <div key={product.id} className="flex gap-5 w-full max-h-[400px]">
                <div className="w-1/4 relative max-h-[400px]">
                  <Image
                    src={product.image}
                    alt="Product Image"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <p>{product.name}</p>
                  <p>X {product.quantity}</p>
                  <p>= {product.price}</p>
                  <IoMdClose
                    size={30}
                    color="red"
                    onClick={() => removeFromCart(product)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleCheckout} className="bg-slate-800">
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
