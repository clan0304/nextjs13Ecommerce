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
    href: '/collections/earphones',
  },
];

const Category = () => {
  return (
    <div className="flex flex-col px-2">
      <div className="self-center pt-10 text-3xl font-extrabold lg:text-5xl font-rakkas tracking-wider">
        By Category
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 my-10">
        {categoryArray.map((item) => (
          <Link href={item.href} key={item.id}>
            <div className="bg-white flex flex-col text-center items-center self-center">
              <div className="relative w-2/5 aspect-[1/1] hover:scale-110">
                <Image src={item.icon} alt="Category" fill objectFit="cover" />
              </div>
              <div className="flex items-center justify-center font-semibold text-md w-3/5 pt-3 min-h-[60px] hover:underline">
                {item.name}
              </div>
              <button className="bg-indigo-500/70 text-sm sm:text-md font-semibold mt-4 rounded-xl text-black hover:bg-black hover:text-white px-4 py-1 xs:px-6 xs:py-1 border-black">
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
