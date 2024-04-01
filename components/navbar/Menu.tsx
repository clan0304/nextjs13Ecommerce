'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useProfileMenuModal from '@/app/hooks/useProfileMenuModal';
import Image from 'next/image';
import ProfileModal from '../modals/ProfileModal';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const profileMenuModal = useProfileMenuModal();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div>
      <IoMenuSharp
        size={20}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="hover:cursor-pointer hover:opacity-20"
      />
      {isMenuOpen && (
        <div className="absolute left-0 z-50 top-0 w-full h-full min-h-screen overflow-y-auto bg-white flex flex-col px-2 text-black pt-6 pl-5 pb-10 gap-y-3">
          <div className="absolute top-0 pt-6 pl-5 z-50">
            <IoMdClose
              size={20}
              color="black"
              onClick={() => setIsMenuOpen(false)}
              className="hover:cursor-pointer hover:opacity-30"
            />
          </div>

          <div className="flex flex-col place-self-center gap-y-20 items-center justify-center font-dmSans text-3xl/8 mt-20">
            <Link
              href="/collections"
              className="hover:text-indigo-500 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              All Products
            </Link>
            <Link
              href="/collections/wirelessheadphones"
              className="hover:text-indigo-500 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Wireless Headphone
            </Link>
            <Link
              href="/collections/wiredheadphones"
              className="hover:text-indigo-500 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Wired Headphone
            </Link>
            <Link
              href="/collections/wirelessearphones"
              className="hover:text-indigo-500 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Wireless Earphone
            </Link>
            <Link
              href="/collections/earphones"
              className="hover:text-indigo-500 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Earphone
            </Link>
            <div className="border-t-2 w-full flex justify-center pt-8 md:hidden">
              {session?.user ? (
                <div className="relative flex gap-1">
                  <Image
                    src={session.user.image!}
                    alt="User Image"
                    width={30}
                    height={30}
                    className="rounded-full hover:cursor-pointer"
                  />{' '}
                  <div
                    className="self-center hover:opacity-70 hover:cursor-pointer"
                    onClick={() => profileMenuModal.onClick()}
                  >
                    {profileMenuModal.isOpen ? (
                      <MdOutlineKeyboardArrowLeft size={15} />
                    ) : (
                      <MdOutlineKeyboardArrowRight size={15} />
                    )}
                  </div>
                  <div className="absolute -top-4 left-9">
                    <ProfileModal />
                  </div>
                </div>
              ) : (
                <FaRegUser
                  className="hover:cursor-pointer hover:text-indigo-500"
                  onClick={() => router.push('/login')}
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
