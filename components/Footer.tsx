import React from 'react';

const Footer = () => {
  return (
    <div className="h-[200px] w-full bg-red-300 flex flex-col sm:flex-row gap-5 items-center justify-around">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-xl font-benne">S H O P</p>
        <p>Wireless Headphones</p>
        <p>Wired Headphones</p>
        <p>Wireless Earphones</p>
        <p>Earphones</p>
      </div>
      <p>© Jay Headphones, Melbourne, 3000, VIC</p>
    </div>
  );
};

export default Footer;
