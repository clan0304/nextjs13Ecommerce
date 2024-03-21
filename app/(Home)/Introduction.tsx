import { AiTwotoneSafetyCertificate } from 'react-icons/ai';

const Introduction = () => {
  return (
    <div className="bg-blue-300 flex flex-col w-full items-center pb-5">
      <p className="my-3">Australia's Marketplace for Sustainable Tech</p>
      <p>Explore a wide variety of Headphones, EarPhones</p>
      <div className="bg-white flex flex-col gap-3 w-4/5 rounded-lg py-5 mt-3 px-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <AiTwotoneSafetyCertificate size={20} />
            <p>Save Up To 70%</p>
          </div>
          <p>
            Priced just right. Find the best deals for your favorite Headphones,
            Earphones.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <AiTwotoneSafetyCertificate size={20} />
            <p>14 Days Free Returns</p>
          </div>
          <p>
            We guarantee satisfaction. All products are 100% functional and
            professionally cleaned and inspected by industry experts at 70+
            quality checkpoints. If you change your mind, 14-day returns are on
            us.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <AiTwotoneSafetyCertificate size={20} />
            <p>12-Month Warranty</p>
          </div>
          <p>
            Buy with confidence and enjoy your purchase to the fullest with our
            12-month warranty plan on all products. Expand this protection for
            24 months with ReebeloCare's physical & liquid damage cover.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
