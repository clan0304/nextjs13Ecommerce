'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <IoMenuSharp size={20} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <div className="absolute left-0 top-0 flex flex-col">
          <div className="flex justify-end">
            <IoMdClose onClick={() => setIsMenuOpen(false)} />
          </div>
          <div className="flex flex-col justify-center">
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
