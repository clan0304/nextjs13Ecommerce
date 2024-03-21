import Image from 'next/image';
import Photo1 from '@/public/images/mainpagephoto.jpg';
import Introduction from './(Home)/Introduction';
import BestSeller from './(Home)/BestSeller';
import HomeNavbar from './(Home)/HomeNavbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative w-full max-h-[100vh] aspect-[4/3]">
        <div className="z-20 w-full absolute top-0 left-0">
          <HomeNavbar />
        </div>
        <div className="z-0">
          <Image src={Photo1} alt="Main Photo" fill objectFit="cover" />
          <Link href="/collections">
            <button className="absolute left-1/2 transform -translate-x-1/2 bottom-5 bg-white px-10 rounded-xl py-1.5">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <BestSeller />
      <Introduction />
    </main>
  );
}
