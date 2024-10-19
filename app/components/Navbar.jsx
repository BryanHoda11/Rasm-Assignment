"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import Logo from '../images/Logo.svg';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [resNav, setresNav] = useState(false);

    return (
        <>
            <div className="navbar flex items-center gap-2 relative">
                <div className="logo bg-white w-[80%] sm:w-1/2 md:w-[20%] h-full px-3">
                    <Image className='cursor-pointer' src={Logo} alt="Rasm Logo" width={200} />
                </div>
                <nav className='flex items-center justify-end lg:justify-between px-10 h-[100px] bg-black w-full text-white'>
                    <ul className='hidden md:flex items-center gap-8 text-sm'>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>HOME</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>ABOUT US</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>SERVICES</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>GALLERY</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>BLOG</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>CONTACT US</li>
                    </ul>

                    <div className='hidden lg:flex items-center gap-4'>
                        <span className='text-white flex items-center justify-center text-lg bg-[#414141] h-12 w-12 rounded-full cursor-pointer'><IoIosSearch style={{ fontSize: '18px' }} /></span>
                        <span className='text-white flex items-center justify-center text-lg bg-[#414141] h-12 w-12 rounded-full cursor-pointer'><HiOutlineShoppingCart style={{ fontSize: '18px' }} /></span>
                        <span className='text-white flex items-center justify-center text-lg bg-[#414141] h-12 w-12 rounded-full cursor-pointer'><BsGrid3X3Gap style={{ fontSize: '18px' }} /></span>

                        <button className='bg-[#c47f5d] text-white hidden xl:flex items-center gap-2 cursor-pointer py-4 px-4 hover:bg-white hover:text-black transition-all duration-500 ease-in'>APPOINTMENT NOW <FaArrowRight /></button>
                    </div>

                    <button onClick={() => setresNav(!resNav)} className='bg-[#c47f5d] text-white md:hidden flex items-center gap-2 cursor-pointer py-4 px-4 hover:bg-black hover:text-white transition-all duration-500 ease-in'><GiHamburgerMenu style={{ fontSize: '25px' }} /></button>
                </nav>

                {resNav && <nav className="res-nav absolute z-10 top-0 left-0 min-h-screen w-full sm:w-1/2 bg-white border-r-2 border-[#c47f5d]">
                    <div className="logo bg-white px-3 py-6">
                        <Image className='cursor-pointer' src={Logo} alt="Rasm Logo" width={200} />
                    </div>
                    <div className="cross absolute top-2 right-3 text-[#c47f5d] cursor-pointer"><FaTimes onClick={() => setresNav(false)} style={{ fontSize: '20px' }} /></div>
                    <ul className='flex flex-col mx-auto justify-center items-center gap-8 text-sm text-black py-6'>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>HOME</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>ABOUT US</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>SERVICES</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>GALLERY</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>BLOG</li>
                        <li className='cursor-pointer hover:text-[#ab6a49] transition-all duration-300 ease-in'>CONTACT US</li>
                    </ul>
                </nav>}
            </div>
        </>
    )
}

export default Navbar