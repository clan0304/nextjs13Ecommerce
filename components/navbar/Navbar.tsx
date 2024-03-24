'use client';

import { FiShoppingCart } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import Menu from './Menu';
import Link from 'next/link';
import useCartModal from '@/app/hooks/useCartModal';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const cartModal = useCartModal();
  const path = usePathname();

  return (
    <div
      className={`flex flex-col min-h-20 py-3 ${
        path !== '/' ? 'bg-white block' : 'hidden'
      }`}
    >
      <div className="flex justify-between w-full">
        <div className="ml-3 block md:hidden">
          <Menu />
        </div>
        <Link href="/">
          <div className="self-center">ABCDDD</div>
        </Link>
        <div className="flex gap-3 pr-2">
          <Link href="/admin">
            <GrUserAdmin size={20} className="cursor-pointer" />
          </Link>
          <FiShoppingCart
            onClick={cartModal.onOpen}
            size={20}
            className="cursor-pointer"
          />
          <FaRegUser size={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="hidden md:flex gap-3 justify-around mt-3">
        <Link href="/collections/wiredheadphones">
          <div>Wired Headphones</div>
        </Link>
        <Link href="/collections/wirelessheadphones">
          <div>Wireless Headphones</div>
        </Link>
        <Link href="/collections/earphones">
          <div>Earphones</div>
        </Link>
        <Link href="/collections/wirelessearphones">
          <div>Wireless Earphones</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
