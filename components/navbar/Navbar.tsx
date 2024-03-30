'use client';

import { FiShoppingCart } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import Menu from './Menu';
import Link from 'next/link';
import useCartModal from '@/app/hooks/useCartModal';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { RiHeadphoneFill } from 'react-icons/ri';

const Navbar = () => {
  const cartModal = useCartModal();
  const path = usePathname();
  const router = useRouter();

  return (
    <div
      className={`flex flex-col justify-center min-h-20 mx-2 mt-2 py-3 border-b-2 ${
        path !== '/' ? 'bg-white block' : 'hidden'
      }`}
    >
      <div className="flex justify-between items-center xs:gap-3 w-full">
        <div className="ml-3 block md:hidden">
          <Menu />
        </div>
        <Link href="/">
          <div className="relative xs:ml-4 items-center gap-1 hover:scale-110 hover:font-bold">
            <p className="font-caveat text-md xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              JAY HEADPHONES
            </p>
            <div className="absolute -top-4 -right-9">
              <RiHeadphoneFill size={30} />
            </div>
          </div>
        </Link>
        <div className="flex gap-3 pr-2">
          <Link href="/admin">
            <GrUserAdmin size={20} className="cursor-pointer hidden xs:block" />
          </Link>
          <FiShoppingCart
            onClick={cartModal.onOpen}
            size={20}
            className="cursor-pointer"
          />
          <div className="hidden sm:block">
            <FaRegUser
              size={20}
              className="cursor-pointer"
              onClick={() => router.push('/login')}
            />
          </div>
        </div>
      </div>
      <div className="md:flex mt-10 hidden justify-start ml-5">
        <Link href="/collections/wirelessheadphones">
          <div className="border-2 px-3 rounded-md hover:bg-indigo-300">
            Wireless Headphone
          </div>
        </Link>
        <Link href="/collections/wirelessearphones">
          <div className="border-2 px-3 rounded-md hover:bg-indigo-300">
            Wireless Earphone
          </div>
        </Link>
        <Link href="/collections/wiredheadphones">
          <div className="border-2 px-3 rounded-md hover:bg-indigo-300">
            Wired Headphone
          </div>
        </Link>
        <Link href="/collections/earphones">
          <div className="px-3 rounded-md hover:bg-indigo-300 border-2">
            Earphone
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
