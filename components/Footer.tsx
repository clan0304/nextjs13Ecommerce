import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="h-[250px] sm:h-[200px] w-full bg-red-300 flex flex-col sm:flex-row gap-5 items-center justify-around py-2">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-xl font-benne">S H O P</p>
        <Link href="/collections/wirelessheadphones">
          <p>Wireless Headphones</p>
        </Link>
        <Link href="/collections/wiredheadphones">
          <p>Wired Headphones</p>
        </Link>
        <Link href="/collections/wirelessearphones">
          <p>Wireless Earphones</p>
        </Link>
        <Link href="/collections/earphones">
          <p>Earphones</p>
        </Link>
      </div>
      <p>© Jay Headphones, Melbourne, 3000, VIC</p>
    </div>
  );
};

export default Footer;
