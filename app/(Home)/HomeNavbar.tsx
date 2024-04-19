'use client';

import { FiShoppingCart } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import Link from 'next/link';
import useCartModal from '@/app/hooks/useCartModal';

import Menu from '@/components/navbar/Menu';
import { RiHeadphoneFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import useProfileMenuModal from '../hooks/useProfileMenuModal';
import ProfileModal from '@/components/modals/ProfileModal';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const HomeNavbar = () => {
  const cartModal = useCartModal();
  const profileMenuModal = useProfileMenuModal();
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut();
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-center py-3 h-20 mx-2 text-white">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="ml-3 block md:hidden">
          <Menu />
        </div>
        <Link href="/">
          <div className="relative ml-4 items-center gap-1 hover:scale-110 hover:font-bold">
            <p className="font-caveat text-sm xs:text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
              JAY HEADPHONES
            </p>
            <div className="hidden xs:block absolute -top-4 -right-7 sm:-top-4 sm:-right-9">
              <RiHeadphoneFill size={25} />
            </div>
          </div>
        </Link>
        <div className="flex gap-3 mr-2">
          {session?.user.isAdmin && (
            <Link href="/admin" className="hover:opacity-70">
              <GrUserAdmin size={20} />
            </Link>
          )}

          <FiShoppingCart
            onClick={cartModal.onOpen}
            size={20}
            className="hover:cursor-pointer hover:opacity-70"
          />
          <div>
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
                className="hover:cursor-pointer hover:opacity-70"
                onClick={() => router.push('/login')}
                size={20}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
