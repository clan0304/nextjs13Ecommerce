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
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import useProfileMenuModal from '@/app/hooks/useProfileMenuModal';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import ProfileModal from '../modals/ProfileModal';

const Navbar = () => {
  const cartModal = useCartModal();
  const path = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const profileMenuModal = useProfileMenuModal();

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
          <div className="relative ml-4 items-center gap-1 hover:scale-110 hover:font-bold">
            <p className="font-caveat text-md xs:text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
              JAY HEADPHONES
            </p>
            <div className="hidden xs:block absolute -top-4 -right-7 sm:-top-4 sm:-right-9">
              <RiHeadphoneFill size={25} />
            </div>
          </div>
        </Link>
        <div className="flex gap-3 pr-2">
          {session?.user?.isAdmin && (
            <Link href="/admin">
              <GrUserAdmin
                size={20}
                className="cursor-pointer hidden xs:block"
              />
            </Link>
          )}

          <FiShoppingCart
            onClick={cartModal.onOpen}
            size={20}
            className="cursor-pointer"
          />
          <div className="hidden sm:block">
            {session?.user ? (
              <div className="relative flex gap-1">
                <Image
                  src={session.user.image!}
                  alt="User Image"
                  width={20}
                  height={20}
                  className="rounded-full hover:cursor-pointer"
                />{' '}
                <div
                  className="self-end hover:opacity-70 hover:cursor-pointer"
                  onClick={() => profileMenuModal.onClick()}
                >
                  {profileMenuModal.isOpen ? (
                    <MdOutlineKeyboardArrowUp size={15} />
                  ) : (
                    <MdOutlineKeyboardArrowDown size={15} />
                  )}
                </div>
                <div className="absolute top-6 right-3">
                  <ProfileModal />
                </div>
              </div>
            ) : (
              <FaRegUser
                className="hover:cursor-pointer"
                onClick={() => router.push('/login')}
                size={20}
              />
            )}
          </div>
        </div>
      </div>
      <div className="md:flex mt-10 hidden justify-start ml-5">
        <Link href="/collections">
          <div className="border-2 px-3 rounded-md hover:bg-indigo-300">
            All Products
          </div>
        </Link>
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
