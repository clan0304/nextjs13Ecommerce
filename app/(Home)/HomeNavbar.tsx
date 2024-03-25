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
    <div className="flex flex-col py-3 h-20 mx-2 text-white">
      <div className="flex justify-between gap-3">
        <div className="block md:hidden">
          <Menu />
        </div>
        <Link href="/">
          <div>ABCDDD</div>
        </Link>
        <div className="flex gap-3 mr-2">
          <Link href="/admin">
            <GrUserAdmin size={25} />
          </Link>
          <FiShoppingCart onClick={cartModal.onOpen} size={25} />
          <FaRegUser size={25} />
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
