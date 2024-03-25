'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        size={30}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="hover:cursor-pointer"
      />
      {isMenuOpen && (
        <div className="absolute left-0 z-40 top-0 w-full h-full min-h-[100vh] bg-white flex flex-col px-2 py-3">
          <IoMdClose
            size={30}
            color="black"
            onClick={() => setIsMenuOpen(false)}
            className="hover:cursor-pointer"
          />

          <div className="flex flex-col gap-y-10 items-center mt-20 justify-center">
            <Link href="/">AB</Link>
            <Link href="/">CD</Link>
            <Link href="/">EF</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
