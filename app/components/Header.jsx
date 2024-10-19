"use client"

import React from 'react'
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <header className='flex items-center justify-center lg:justify-between px-5 py-3 bg-[#c28565] header-font'>
                <ul className='hidden lg:flex items-center gap-5 text-white text-sm'>
                    <li className='cursor-pointer flex items-center gap-2 hover:text-black transition-all duration-500 pr-3 border-r-2 border-white'> <FiPhone />+256 214 203 215</li>
                    <li className='cursor-pointer flex items-center gap-2 hover:text-black transition-all duration-500 pr-3 border-r-2 border-white'><LuMail />info@rasm.com</li>
                    <li className='hidden xl:flex items-center gap-2 pr-3 border-r-2 border-white'><CiLocationOn />25 Street, 145 City Town, USA</li>
                    <li className='flex items-center gap-2 pr-3 border-r-2 border-white'><CiClock2 />Mon - Sat: 8 AM - 15 PM Sunday Off </li>
                </ul>

                <div className="flex items-center gap-5 text-black'">
                    <span>Follow us :</span>
                    <ul className='flex items-center gap-5 text-black text-sm'>
                        <li className='cursor-pointer hover:text-white transition-all duration-500'><FaFacebookF /></li>
                        <li className='cursor-pointer hover:text-white transition-all duration-500'><FaTwitter /></li>
                        <li className='cursor-pointer hover:text-white transition-all duration-500'><FaLinkedinIn /></li>
                        <li className='cursor-pointer hover:text-white transition-all duration-500'><FaInstagram /></li>
                        <li className='cursor-pointer hover:text-white transition-all duration-500'><FaYoutube /></li>
                    </ul>
                </div>
            </header>
    </>
  )
}

export default Header
