import EarphoneIcon from '../../public/images/earphoneicon.png';
import WirelessEarphoneIcon from '../../public/images/wirelessearphoneicon.png';
import WiredHeadphoneIcon from '../../public/images/wiredheadphoneicon.png';
import WirelessHeadphoneIcon from '../../public/images/wirelessheadphoneicon.png';
import Image from 'next/image';
import Link from 'next/link';

const categoryArray = [
  {
    id: 1,
    icon: WirelessHeadphoneIcon,
    name: 'Wireless Headphone',
    href: '/collections/wirelessheadphones',
  },
  {
    id: 2,
    icon: WirelessEarphoneIcon,
    name: 'Wireless Earphone',
    href: '/collections/wirelessearphones',
  },
  {
    id: 3,
    icon: WiredHeadphoneIcon,
    name: 'Wired Headphone',
    href: '/collections/wiredheadphones',
  },
  {
    id: 4,
    icon: EarphoneIcon,
    name: 'Earphone',
    href: '/collections/earphone',
  },
];

const Category = () => {
  return (
    <div className="flex flex-col">
      <div className="self-center pt-10 py-3 text-3xl font-extrabold lg:text-5xl">
        By Category
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 my-10">
        {categoryArray.map((item) => (
          <Link href={item.href} key={item.id}>
            <div className="bg-white flex flex-col text-center items-center self-center">
              <div className="relative w-2/5 aspect-[1/1]">
                <Image src={item.icon} alt="Category" fill objectFit="cover" />
              </div>
              <div className="font-semibold text-md w-3/5 pt-3 hover:underline">
                {item.name}
              </div>
              <button className="bg-indigo-500/70 font-semibold mt-4 rounded-xl text-black hover:bg-black hover:text-white px-7 py-1">
                Show Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
