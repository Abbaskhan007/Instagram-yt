import React from "react";
import {
  SearchIcon,
  HomeIcon,
  HeartIcon,
  PlusCircleIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import {useSession, signOut, signIn} from 'next-auth/react';
import router from 'next/router';
import { useRecoilState } from "recoil";
import { modalState } from "../Atom/modalState";

export default function Header() {
  const {data: session} = useSession();
  console.log('Session Data',session);
  const [open, setOpen] = useRecoilState(modalState);
  
  return (
    <div className="bg-white shadow-sm border-b min-w-full">
      <div className="flex flex-row mx-auto justify-between items-center  p-2 max-w-6xl">
       
          <div className="relative w-16 h-12 cursor-pointer hidden lg:inline-grid">
            <Image
              layout="fill"
              src="https://links.papareact.com/ocw"
              objectFit="contain"
              onClick={()=>router.push('/')}
            />
          </div>
          <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
            <Image
              layout="fill"
              src="https://links.papareact.com/jjm"
              objectFit="contain"
              onClick={()=>router.push('/')}
            />
          </div>
          <div className="flex bg-gray-100 border-black-600 max-w-xs border py-1 px-3 rounded items-center">
            <SearchIcon className="w-7 pr-2 text-gray-500" />
            <input
              className="outline-none bg-transparent "
              type="text"
              placeholder="search"
            />
          </div>
          {session? (
            <div className="flex flex-row items-center space-x-4">
            <HomeIcon className="navbtn" onClick={()=>router.push('/')}/>
            <MenuIcon className="h-6 md:hidden cursor-pointer" />
            <div className="relative navbtn ">
              <PaperAirplaneIcon className="rotate-45" />
              <div className="absolute top-0 -right-1 animate-pulse text-white bg-red-500 rounded-full px-1 text-xs">
                3
              </div>
            </div>
            <PlusCircleIcon onClick={()=>setOpen(true)} className="navbtn" />
            <UserGroupIcon className="navbtn" />
            <HeartIcon className="navbtn" />
            <img
              src= {session?.user.image}
              alt="profile-image"
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick = {signOut}
            />
          </div>
          ): <button onClick={signIn}>SignIn</button>}
          
        </div>
      </div>
  
  );
}
