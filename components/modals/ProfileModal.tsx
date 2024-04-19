'use client';

import useProfileMenuModal from '@/app/hooks/useProfileMenuModal';
import { signOut } from 'next-auth/react';

const ProfileModal = () => {
  const profileMenuModal = useProfileMenuModal();
  return (
    <div>
      {profileMenuModal.isOpen && (
        <div className="bg-white text-black flex flex-col w-[100px] border-2 border-black rounded-lg">
          <div className="hover:bg-indigo-200 hover:cursor-pointer">
            <p className="ml-2 text-sm md:text-md ">Order</p>
          </div>
          <div
            className="border-black border-t-2 hover:bg-indigo-200 hover:cursor-pointer"
            onClick={() => signOut()}
          >
            <p className="ml-2 text-sm md:text-md text-red-600">Sign Out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
