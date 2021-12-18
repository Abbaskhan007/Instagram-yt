import React from 'react'
import {SearchIcon, HomeIcon, HeartIcon, PlusCircleIcon, PaperAirplaneIcon, MenuIcon, UserIcon, UserGroupIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Header() {
    return (
        <div className='flex flex-row justify-between items-center bg-white p-2 max-w-6xl shadow-sm border-b'>
            <div className='relative w-24 h-24 hidden lg:inline-grid'>
            <Image layout='fill'  src='https://links.papareact.com/ocw' objectFit='contain'/>
            </div>
            <div className='relative w-10 h-10 lg:hidden flex-shrink-0'>
            <Image layout='fill'  src='https://links.papareact.com/jjm' objectFit='contain'/>
            </div>
            <div className="flex bg-gray-100 border-black-600 max-w-xs border py-1 px-3 rounded items-center">
            <SearchIcon className='w-7 pr-2 text-gray-500'/>
            <input className="outline-none bg-transparent " type='text' placeholder='search'/>
            </div>
            <div className="flex flex-row items-center space-x-4">
                <HomeIcon className='navbtn'/>
                <MenuIcon className='h-6 md:hidden cursor-pointer'/>
                <div className='relative navbtn '>
                <PaperAirplaneIcon className='rotate-45'/>
                <div className='absolute top-0 -right-1 animate-pulse text-white bg-red-500 rounded-full px-1 text-xs'>3</div>
                </div>
                <PlusCircleIcon className='navbtn'/>
                <UserGroupIcon className='navbtn'/>
                <HeartIcon className='navbtn'/>
                <img src='https://res.cloudinary.com/abikhan/image/upload/v1622830591/qffjnibhedbnyxv8cums.jpg' alt='profile-image' className='h-10 w-10 rounded-full'/>
            </div>
        </div>
    )
}
