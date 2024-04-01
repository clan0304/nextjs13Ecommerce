import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="h-[250px] sm:h-[200px] w-full bg-orange-100 flex flex-col sm:flex-row gap-5 items-center justify-around py-2 border-t-2">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-xl font-rakkas">S H O P</p>
        <Link
          href="/collections/wirelessheadphones"
          className="hover:underline"
        >
          <p className="text-md sm:text-lg">Wireless Headphones</p>
        </Link>
        <Link href="/collections/wiredheadphones" className="hover:underline">
          <p className="text-md sm:text-lg">Wired Headphones</p>
        </Link>
        <Link href="/collections/wirelessearphones" className="hover:underline">
          <p className="text-md sm:text-lg">Wireless Earphones</p>
        </Link>
        <Link href="/collections/earphones" className="hover:underline">
          <p className="text-md sm:text-lg">Earphones</p>
        </Link>
      </div>
      <p className="text-[10px] xs:text-md">
        © Jay Headphones, Melbourne, 3000, VIC
      </p>
    </div>
  );
};

export default Footer;
