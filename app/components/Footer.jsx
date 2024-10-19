import React from 'react'
import '../globals.css';
import Image from 'next/image'
import Palm from '../images/palmleaf.png';
import Recent1 from '../images/recent1.png'
import Recent2 from '../images/recent2.png'
import footerLogo from '../images/footerlogo.svg';
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className='bg-black mt-10 relative overflow-hidden'>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center py-12 w-[90%] lg:w-[80%] mx-auto text-white">
                    <div className="flex flex-col items-start gap-3">
                        <div className="footer-logo h-full px-3">
                            <Image className='cursor-pointer' src={footerLogo} alt="Rasm Logo" />
                        </div>
                        <p className='text-[#9e9e9e] w-[90%] py-3'>Centric applications productize front end portals visualize front end.</p>
                        <ul className='flex flex-col gap-2'>
                            <li className='cursor-pointer flex items-center gap-2 hover:text-[#c47f5d] transition-all duration-500'> <FiPhone />+256 214 203 215</li>
                            <li className='cursor-pointer flex items-center gap-2 hover:text-[#c47f5d] transition-all duration-500'><LuMail />info@rasm.com</li>
                        </ul>

                        <ul className='flex items-center gap-2 text-white text-lg py-4'>
                            <li className='cursor-pointer h-10 w-10 px-3 py-3 bg-[#3D4250] hover:rotate-rotate360 hover:bg-[#c47f5d] transition-all duration-500'><FaFacebookF /></li>
                            <li className='cursor-pointer h-10 w-10 px-3 py-3 bg-[#3D4250] hover:rotate-rotate360 hover:bg-[#c47f5d] transition-all duration-500'><FaTwitter /></li>
                            <li className='cursor-pointer h-10 w-10 px-3 py-3 bg-[#3D4250] hover:rotate-rotate360 hover:bg-[#c47f5d] transition-all duration-500'><FaLinkedinIn /></li>
                            <li className='cursor-pointer h-10 w-10 px-3 py-3 bg-[#3D4250] hover:rotate-rotate360 hover:bg-[#c47f5d] transition-all duration-500'><FaBehance /></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='text-xl'>Quick Links</h2>
                        <ul className='flex flex-col pt-3 gap-4'>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />About Us</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Work Gallery</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Privacy Policy</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Our Services</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Pricing Plans</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Contact Us</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='text-xl'>Our Services</h2>
                        <ul className='flex flex-col pt-3 gap-4'>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Hands & Feet</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Facials Waxing</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Body Waxing</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Brows & Lashes</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Body Massage</li>
                            <li className='flex items-center cursor-pointer text-[#9e9e9e] gap-2 hover:gap-4 hover:text-[#c47f5d] transition-all duration-500'><FaArrowRight />Nail Art</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='text-xl'>Recent Posts</h2>
                        <ul className='flex flex-col pt-3 gap-6'>
                            <li className='flex items-center gap-3'><Image src={Recent1} alt='recent-1' />
                                <div className="flex flex-col gap-2 ">
                                    <h3 className='hover:text-[#c47f5d] transition-all duration-500 cursor-pointer'>Local residents and a few celebrities, too</h3>
                                    <span className='text-[#9e9e9e] cursor-pointer hover:text-[#c47f5d] transition-all duration-500'>19 June, 2023</span>
                                </div>
                            </li>
                            <li className='flex items-center gap-3'><Image src={Recent2} alt='recent-2' />
                                <div className="flex flex-col gap-2 ">
                                    <h3 className='hover:text-[#c47f5d] transition-all duration-500 cursor-pointer'>Local residents and a few celebrities, too</h3>
                                    <span className='text-[#9e9e9e] cursor-pointer hover:text-[#c47f5d] transition-all duration-500'>22 June, 2023</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="banner-img w-[20%] h-[20%] absolute z-10 -left-32 top-12 rotate-180">
                    <Image className='cursor-default hidden xl:block' src={Palm} alt="palm-leaf" />
                </div>

                <section className='w-full bg-[#53443D] flex px-3 py-4 text-white justify-around'>
                    <p>&copy; 2023 <span className='text-[#c47f5d]'>Rasm</span>. All Rights Reserved</p>
                    <p className='hidden sm:flex items-center gap-3'><span className='hover:text-[#c47f5d] transition-all duration-500 cursor-pointer'>Terms & Conditions</span> / <span className='hover:text-[#c47f5d] transition-all duration-500 cursor-pointer'>Terms & Condition</span></p>
                </section>
                <section className='w-full bg-white px-3 py-4'>
                    <p className='text-sm w-[80%] sm:text-lg text-center text-[#c47f5d] font-bold'>I tried my level best to do this in just 2 days timespan. Apologies for any different layout or design. Tried some of my own designs too. Hope you are satisfied with the outcome! 😊</p>
                </section>
            </footer>
        </>
    )
}

export default Footer
