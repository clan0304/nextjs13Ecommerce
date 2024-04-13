'use client';

import useProfileMenuModal from '@/app/hooks/useProfileMenuModal';
import { signOut } from 'next-auth/react';

const ProfileModal = () => {
  const profileMenuModal = useProfileMenuModal();
  return (
    <div>
      {profileMenuModal.isOpen && (
        <div className="bg-slate-300  ml-3 flex flex-col w-full border-2 border-white p-3 rounded-lg">
          <div>
            <p className="text-md sm:text-lg lg:text-xl">Order</p>
          </div>
          <div className="border-black border-t-2" onClick={() => signOut}>
            <p className="text-md sm:text-lg lg:text-xl">Sign Out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
