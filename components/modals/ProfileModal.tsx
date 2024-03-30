import useProfileMenuModal from '@/app/hooks/useProfileMenuModal';
import { signOut } from 'next-auth/react';

const ProfileModal = () => {
  const profileMenuModal = useProfileMenuModal();
  return (
    <div>
      {profileMenuModal.isOpen && (
        <div className="bg-slate-300   justify-center flex w-full border-2 border-white p-3 mx-3 rounded-xl">
          <div className="text-xs md:text-sm  rounded-xl w-full  flex text-center flex-col items-center gap-1">
            <div className="w-full border-b-2 text-black bg-white hover:cursor-pointer hover:opacity-70">
              Order
            </div>
            <div
              className="w-full bg-white text-black hover:cursor-pointer hover:opacity-70"
              onClick={() => signOut()}
            >
              Sign Out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
