'use client';

import useProfileMenuModal from '@/app/hooks/useProfileMenuModal';
import { signOut } from 'next-auth/react';

const ProfileModal = () => {
  const profileMenuModal = useProfileMenuModal();
  return (
    <div>
      {profileMenuModal.isOpen && (
        <div className="bg-white text-black flex flex-col w-full border-2 border-black rounded-lg">
          <div className="hover:bg-indigo-200">
            <p className="ml-2 text-sm md:text-md ">Order</p>
          </div>
          <div
            className="border-black border-t-2 hover:bg-indigo-200"
            onClick={() => signOut}
          >
            <p className="ml-2 text-sm md:text-md">Sign Out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
