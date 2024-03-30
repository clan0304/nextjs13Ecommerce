'use client';

import React, { useEffect } from 'react';
import { useCartStore } from '../libs/store';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
  const { clearProducts } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setTimeout(() => {
          clearProducts();
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [router, clearProducts]);
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="w-2/3 text-center flex flex-col items-center justify-center gap-8">
        <FaCheckCircle color="green" size={100} />
        <p className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl">
          Thanks for your order!
        </p>
        <button
          className="bg-indigo-500 px-7 py-2 rounded-xl text-xl font-semibold hover:opacity-70"
          onClick={() => router.push('/collections')}
        >
          Continue to Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
