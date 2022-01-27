import React from "react";
import {useSession,signOut} from 'next-auth/react'

export default function MiniProfile() {
  const {data:session} = useSession();
  return (
      <div>
    <div className="flex items-center mt-8 border-b  border-gray-400 pb-4 ml-6">
        
      <img
        src={session?.user?.image}
        className="h-12 w-12 rounded-full mr-3"
      />
      <div className="flex-1">
        <p className="font-bold">{session?.user?.username}</p>
        <p className="text-gray-400">Welcome to Instagram</p>
      </div>
      <p className="text-blue-400 cursor-pointer" onClick={signOut}>Sign Out</p>
    </div>
    </div>
  );
}
