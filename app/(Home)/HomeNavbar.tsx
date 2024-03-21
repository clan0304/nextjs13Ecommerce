'use client';

import { FiShoppingCart } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import Link from 'next/link';
import useCartModal from '@/app/hooks/useCartModal';
import { usePathname } from 'next/navigation';
import Menu from '@/components/navbar/Menu';

const HomeNavbar = () => {
  const cartModal = useCartModal();
  const path = usePathname();

  return (
    <div className="flex flex-col py-3 h-10 mx-2">
      <div className="flex justify-between gap-3">
        <div>
          <Menu />
        </div>
        <Link href="/">
          <div>ABCDDD</div>
        </Link>
        <div className="flex gap-3 mr-2">
          <Link href="/admin">
            <GrUserAdmin size={20} />
          </Link>
          <FiShoppingCart onClick={cartModal.onOpen} size={20} />
          <FaRegUser size={20} />
        </div>
      </div>
      <div className="flex gap-3 justify-around mt-3">
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

export default HomeNavbar;
