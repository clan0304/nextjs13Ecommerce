import { AiTwotoneSafetyCertificate } from 'react-icons/ai';

const Introduction = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-5 px-2 lg:px-20 bg-gradient-to-b from-indigo-500/70 to-white">
      <div className="bg-white flex lg:flex-row flex-col gap-y-7 w-4/5 lg:w-full rounded-lg px-2 py-3 lg:px-6 lg:gap-6 self-center">
        <div className="flex flex-col gap-2 lg:w-1/3">
          <div className="flex gap-3 items-center">
            <AiTwotoneSafetyCertificate size={20} />
            <p className="font-semibold text-xl lg:text-2xl">Save Up To 70%</p>
          </div>
          <p className="">
            Priced just right. Find the best deals for your favorite Headphones,
            Earphones.
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:w-1/3">
          <div className="flex gap-3 items-center">
            <AiTwotoneSafetyCertificate size={20} />
            <p className="font-semibold text-xl lg:text-2xl">
              14 Days Free Returns
            </p>
          </div>
          <p>
            We guarantee satisfaction. All products are 100% functional and
            professionally cleaned and inspected by industry experts at 70+
            quality checkpoints. If you change your mind, 14-day returns are on
            us.
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:w-1/3">
          <div className="flex gap-3 items-center">
            <AiTwotoneSafetyCertificate size={20} />
            <p className="font-semibold text-xl lg:text-2xl">
              12-Month Warranty
            </p>
          </div>
          <p>
            Buy with confidence and enjoy your purchase to the fullest with our
            12-month warranty plan on all products. Expand this protection for
            24 months with ReebeloCare&apos;s physical & liquid damage cover.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
