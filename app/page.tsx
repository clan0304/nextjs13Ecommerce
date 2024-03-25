import Image from 'next/image';
import Photo1 from '@/public/images/mainphoto1.jpg';
import Introduction from './(Home)/Introduction';
import BestSeller from './(Home)/BestSeller';
import HomeNavbar from './(Home)/HomeNavbar';
import Link from 'next/link';
import Category from './(Home)/Category';

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <div className="relative w-full max-h-[100vh] lg:max-h-full lg:min-h-[100vh] aspect-[1/1] md:aspect-[4/3] lg:aspect-[16/9]">
        <div className="z-20 w-full absolute top-0 left-0">
          <HomeNavbar />
        </div>
        <div className="z-0">
          <Image src={Photo1} alt="Main Photo" fill objectFit="cover" />
          <Link href="/collections">
            <button className="absolute left-1/2 transform -translate-x-1/2 text-lg md:text-xl lg:text-2xl 2xl:text-3xl bottom-[1.5rem] lg:bottom-[2rem] xl:bottom-[3rem] 2xl:bottom-[5rem] 3xl:bottom-[10%] bg-white px-8 sm:px-10 md:px-14 lg:px-20 rounded-xl py-1.5 md:py-2.5 lg:py-4 font-roboto font-bold hover:scale-125">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <Category />

      <BestSeller />
      <Introduction />
    </main>
  );
}
