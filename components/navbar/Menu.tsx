'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useProfileMenuModal from '@/app/hooks/useProfileMenuModal';

import { motion } from 'framer-motion';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const profileMenuModal = useProfileMenuModal();

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

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
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute left-0 z-50 top-0 w-full h-full min-h-screen overflow-y-auto bg-white flex flex-col px-2 text-black pt-6 pl-5 pb-10 gap-y-3"
        >
          <div className="absolute top-0 pt-6 pl-5 z-50">
            <IoMdClose
              size={20}
              color="black"
              onClick={() => setIsMenuOpen(false)}
              className="hover:cursor-pointer hover:opacity-30"
            />
          </div>

          <motion.div
            variants={listItemVariants}
            className="flex flex-col place-self-center text-center gap-y-20 items-center justify-center font-dmSans text-3xl/8 mt-20"
          >
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
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
