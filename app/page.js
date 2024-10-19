"use client"

import { useRef } from 'react';
import CountUp from 'react-countup';
import Marquee from "react-fast-marquee";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

// Icons and Images 
import Image from "next/image";
import Introbanner from './images/introbanner.png';
import Rasmintro from './images/rasmintro.svg';
import Nail from './images/nail.png';
import Palm from './images/palmleaf.png';
import Decoration from './images/decoration.svg';
import Decorationwhite from './images/decorationwhite.svg';
import Decoration2 from './images/decoration2.svg';
import Decoration2white from './images/decoration2white.svg';
import { FaArrowRight } from "react-icons/fa6";
import Counter from './images/counter.png';
import { FaPlay } from "react-icons/fa";
import count1 from './images/count1.svg';
import count2 from './images/count2.svg';
import count3 from './images/count3.svg';
import count4 from './images/count4.svg';
import Servicebanner from './images/servicebanner.png';
import Service1 from './images/service1.png';
import Service2 from './images/service2.png';
import Service3 from './images/service3.png';
import Service4 from './images/service4.png';
import Whyusbanner from './images/whyusbanner.png';
import Chooseus1 from './images/chooseus1.svg';
import Chooseus2 from './images/chooseus2.svg';
import Chooseus3 from './images/chooseus3.svg';
import Flower from './images/flower.png';
import Product1 from './images/product1.png';
import Product2 from './images/product2.png';
import Product3 from './images/product3.png';
import Product4 from './images/product4.png';
import Newsletter from './images/newsletter.png';
import Gallery1 from './images/gallery1.png';
import Gallery2 from './images/gallery2.png';
import Gallery3 from './images/gallery3.png';
import Gallery4 from './images/gallery4.png';
import Blog1 from './images/blog1.png';
import Blog2 from './images/blog2.png';
import Blog3 from './images/blog3.png';
import Blog4 from './images/blog4.png';
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

export default function Home() {
  const ref = useRef()

  const handleScrollup = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const Products = [
    {
      img: <Image src={Product1} alt='product1' />,
      name: 'Wholesale Liquid',
      Type: 'Classic',
      Price: '$96',
    },
    {
      img: <Image src={Product2} alt='product2' />,
      name: 'Sunscreen Lotion',
      Type: 'Brand',
      Price: '$98',
    },
    {
      img: <Image src={Product3} alt='product3' />,
      name: 'Hair Dryers',
      Type: 'Cosmetic',
      Price: '$85',
    },
    {
      img: <Image src={Product4} alt='product4' />,
      name: 'OPI Nail Polish',
      Type: 'Popular',
      Price: '$99',
    },
  ]

  const Gallery = [
    {
      number: 1,
      img: <Image src={Gallery1} alt='gallery1' />
    },
    {
      number: 2,
      img: <Image src={Gallery2} alt='gallery2' />
    },
    {
      number: 3,
      img: <Image src={Gallery3} alt='gallery3' />
    },
    {
      number: 4,
      img: <Image src={Gallery4} alt='gallery4' />
    },
  ]

  const Blog = [
    {
      number: 1,
      img: <Image src={Blog1} alt='Blog1' />,
      header: 'Maintaining Health and Beauty Through Spas',
      read: <div className='flex items-center gap-3 cursor-pointer hover:text-[#c47f5d] transition-all duration-300'><h4>READ MORE</h4><FaArrowRight /></div>,
    },
    {
      number: 2,
      img: <Image src={Blog2} alt='Blog2' />,
      header: 'Do Massages Have Real Health Benefits ?',
      read: <div className='flex items-center gap-3 cursor-pointer hover:text-[#c47f5d] transition-all duration-300'><h4>READ MORE</h4><FaArrowRight /></div>,
    },
    {
      number: 3,
      img: <Image src={Blog3} alt='Blog3' />,
      header: 'Ultra Glam Gold Nail Polishes for Holiday',
      read: <div className='flex items-center gap-3 cursor-pointer hover:text-[#c47f5d] transition-all duration-300'><h4>READ MORE</h4><FaArrowRight /></div>,
    },
    {
      number: 4,
      img: <Image src={Blog4} alt='Blog4' />,
      header: 'A Relaxation of the Senses with Thier Help',
      read: <div className='flex items-center gap-3 cursor-pointer hover:text-[#c47f5d] transition-all duration-300'><h4>READ MORE</h4><FaArrowRight /></div>,
    },
  ]

  return (
    <>
      <div ref={ref} className="main-container relative">
        <Header />
        <Navbar />
        <div className="intro-banner min-h-[80vh] relative flex flex-col pt-7 lg:pt-0 lg:flex-row justify-around items-center w-full overflow-hidden mb-10 bg-[#f4e8e1] bg-opacity-70">
          <div className="banner-img w-[20%] h-[20%] absolute z-10 -left-32 top-32 -rotate-180">
            <Image className='hidden xl:block cursor-default' src={Palm} alt="palm-leaf" />
          </div>
          <div className="flex flex-col items-center sm:items-start py-5 lg:py-0 gap-2">
            <h3 className="flex items-center text-lg gap-3 text-[#c47f5d]"> <Image src={Rasmintro} alt="Rasm-intro" />Welcome to Rasm Nail Stylist</h3>
            <h1 className="text-4xl sm:text-6xl cursor-default font-bold">NAIL ARTISTRY</h1>
            <h1 className="text-4xl sm:text-6xl cursor-default font-bold flex items-center gap-3"> <Image className='hidden sm:block' src={Nail} alt="Nail" />THAT SHINES</h1>
            <button className='bg-[#c47f5d] text-white flex items-center gap-2 mt-5 cursor-pointer py-4 px-4 hover:bg-black hover:text-white transition-all duration-500 ease-in'>DISCOVER MORE <FaArrowRight /></button>
          </div>
          <div className="banner-img sm:w-1/2 h-auto">
            <Image className='cursor-pointer' src={Introbanner} alt="intro-banner" />
          </div>
        </div>

        <div className="about-us w-full my-10">
          <div className="flex flex-col items-center gap-3 h-auto mx-auto px-5">
            <h3 className="text-center text-lg text-[#c47f5d]">About Us</h3>
            <Image src={Decoration} alt='decoration' />
            <h2 className="text-2xl md:text-4xl text-center">Step Into The World of Nail Styling Perfection</h2>
            <p className="text-center text-[#6e6e6e] w-full md:w-[75%] lg:w-1/2">At our Nail Style Salon, we understand that each client is unique, and their nail preferences vary. That's why we offer customized nail services tailored to your specific needs. Whether you're looking for a classic French manicure, a chic and sophisticated look for a special event.</p>
            <div className="buttons flex flex-col sm:flex-row items-center sm:gap-4">
              <button className='bg-[#c47f5d] text-white flex items-center gap-2 mt-5 cursor-pointer py-4 px-6 hover:bg-black hover:text-white transition-all duration-500 ease-in'>MORE ABOUT US <FaArrowRight /></button>
              <button className='bg-white text-[#c47f5d] border border-[#c47f5d] flex items-center gap-2 mt-5 cursor-pointer py-4 px-6 hover:bg-[#c47f5d] hover:text-white transition-all duration-500 ease-in'>MAKE A CALL <FaArrowRight /></button>
            </div>
          </div>

          <div className="counter flex flex-col xl:flex-row items-center justify-center gap-14 mt-5 mx-6">
            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" target="_blank"><div className="counter-img relative">
              <Image src={Counter} alt='Counter' />
              <div className="play hidden sm:flex items-center justify-center absolute cursor-pointer top-[40%] right-[45%] bg-black hover:bg-transparent transition-all duration-500 text-white h-24 w-24 border border-white rounded-full"><FaPlay /></div>
            </div></a>

            <div className="counts grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="count1 flex flex-col items-center gap-3">
                <Image src={count1} alt='count1' />
                <span className="text-4xl"><CountUp start={0} end={26} delay={0} enableScrollSpy={true} scrollSpyOnce={true} />+</span>
                <h3 className="text-lg sm:text-xl text-[#6e6e6e]">Years of Experience</h3>
              </div>
              <div className="count2 flex flex-col items-center gap-3">
                <Image src={count2} alt='count2' />
                <span className="text-4xl"><CountUp start={0} end={100} delay={0} enableScrollSpy={true} scrollSpyOnce={true} />%</span>
                <h3 className="text-lg sm:text-xl text-[#6e6e6e]">Natural Products</h3>
              </div>
              <div className="count3 flex flex-col items-center gap-3">
                <Image src={count3} alt='count3' />
                <span className="text-4xl"><CountUp start={0} end={56} delay={0} enableScrollSpy={true} scrollSpyOnce={true} />k+</span>
                <h3 className="text-lg sm:text-xl text-[#6e6e6e]">Satisfied Clients</h3>
              </div>
              <div className="count4 flex flex-col items-center gap-3">
                <Image src={count4} alt='count4' />
                <span className="text-4xl"><CountUp start={0} end={36} delay={0} enableScrollSpy={true} scrollSpyOnce={true} />+</span>
                <h3 className="text-lg sm:text-xl text-[#6e6e6e]">Specialists Team</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="services my-10 bg-[#edd7cc] py-8 relative overflow-hidden">
          <div className="flex flex-col items-center gap-3 h-auto mx-auto px-5">
            <h3 className="text-center text-lg text-[#c47f5d]">Our Services</h3>
            <Image src={Decoration} alt='decoration' />
            <h2 className="text-2xl md:text-4xl text-center">Professional Spa and Beauty Service</h2>
          </div>

          <div className="services flex flex-col md:flex-row items-center justify-center sm:px-10 pt-12 gap-8 lg:gap-0">
            <div className="services1 flex flex-col gap-12">
              <div className="service-card flex flex-col justify-center gap-3 bg-white px-5 py-5 w-full md:min-w-[200px] h-auto">
                <Image src={Service1} alt='service1' />
                <p className='text-xl cursor-pointer hover:text-[#c47f5d] transition-all duration-500'>Nail Manicure</p>
              </div>
              <div className="service-card flex flex-col justify-center gap-3 bg-white px-5 py-5 w-full md:min-w-[200px] h-auto">
                <Image src={Service2} alt='service2' />
                <p className='text-xl cursor-pointer hover:text-[#c47f5d] transition-all duration-500'>Nail Art</p>
              </div>
            </div>

            <div className="service-banner hidden lg:block bg-opacity-50">
              <Image src={Servicebanner} alt='Service-banner' />
            </div>

            <div className="services1 flex flex-col gap-12">
              <div className="service-card flex flex-col justify-center gap-3 bg-white px-5 py-5 w-full md:min-w-[200px] h-auto">
                <Image src={Service3} alt='service3' />
                <p className='text-xl cursor-pointer hover:text-[#c47f5d] transition-all duration-500'>Nail Pedicure</p>
              </div>
              <div className="service-card flex flex-col justify-center gap-3 bg-white px-5 py-5 w-full md:min-w-[200px] h-auto">
                <Image src={Service4} alt='service4' />
                <p className='text-xl cursor-pointer hover:text-[#c47f5d] transition-all duration-500'>Nail Paraffin Hands</p>
              </div>
            </div>
          </div>
          <div className="banner-img w-[20%] hidden lg:block h-[20%] absolute -right-6 -bottom-3">
            <Image className='cursor-default' src={Palm} alt="palm-leaf" />
          </div>
        </div>

        <div className="why-us my-10 bg-white">
          <div className="whyus-container flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 py-7 px-2 sm:px-7 relative overflow-hidden">

            <div className="info flex flex-col gap-3 w-full sm:w-[80%] lg:w-1/2">
              <div className="whyus-header flex gap-3 items-center">
                <h3 className="flex items-center gap-3 text-lg text-[#c47f5d]">Why Choose Us</h3>
                <Image src={Decoration2} alt='decoration2' />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-4xl">We Have 25 Years Of Experience With Nail Style.</h2>
                <p className='text-[#6e6e6e]'>We prioritize the cleanliness and comfort of our clients, ensuring a hygienic and relaxing environment throughout your visit. Our salon adheres to strict sanitization protocols, and all our tools.</p>
              </div>

              <ul className='flex flex-col pt-5 gap-8'>
                <li className='flex items-center gap-2 sm:gap-5'>
                  <Image src={Chooseus1} alt='chooseus1' className='cursor-default pr-3' />
                  <div className="flex flex-col gap-3">
                    <h3 className='text-2xl'>Brand Nail Art Equipment</h3>
                    <p className='text-[#6e6e6e] w-full sm:w-[80%] text-lg'>From classic manicures and pedicures to intricate nail art and personalized nail extensions</p>
                  </div>
                </li>
                <li className='flex items-center gap-2 sm:gap-5'>
                  <Image src={Chooseus2} alt='chooseus2' className='cursor-default pr-3' />
                  <div className="flex flex-col gap-3">
                    <h3 className='text-2xl'>Best Place</h3>
                    <p className='text-[#6e6e6e w-full sm:w-[80%] text-lg'>That's why we only use premium quality nail polishes, gel, and other nail products from trusted brands</p>
                  </div>
                </li>
                <li className='flex items-center gap-2 sm:gap-5'>
                  <Image src={Chooseus3} alt='chooseus3' className='cursor-default pr-3' />
                  <div className="flex flex-col gap-3">
                    <h3 className='text-2xl'>Special Support</h3>
                    <p className='text-[#6e6e6e] w-full sm:w-[80%] text-lg'>That's why we only use premium quality nail polishes, gel, and other nail products from trusted brands.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="banner">
              <Image src={Whyusbanner} alt='whyus-banner' />
            </div>

            <div className="flower absolute hidden lg:block z-10 right-[32%] bottom-0"><Image src={Flower} alt='flower' /></div>
          </div>
        </div>

        <div className="prices my-10">
          <div className="price-details w-full sm:w-[80%] px-7 mx-auto relative bg-[#f8e8e1]">
            <div className="flex flex-col items-center gap-3 h-auto py-3">
              <h3 className="text-center text-lg text-[#c47f5d]">Nail & Hand Care</h3>
              <Image src={Decoration} alt='decoration' />
              <h2 className="text-2xl md:text-4xl text-center">Our Nails Treatments & Prices</h2>
            </div>

            <ul className='flex flex-col py-7 gap-6 mx-auto'>
              <li><div className="flex justify-between items-center gap-20">
                <div className='flex flex-col'>
                  <a href="#" className='cursor-pointer text-xl hover:text-[#c47f5d] transition-all duration-500'>Manicure</a>
                  <span className='text-[#6e6e6e]'>Elemental tempus getas</span>
                </div>
                <span>$26</span>
              </div> </li>
              <li><div className="flex justify-between items-center gap-20">
                <div className='flex flex-col'>
                  <a href="#" className='cursor-pointer text-xl hover:text-[#c47f5d] transition-all duration-500'>Nail Clippers</a>
                  <span className='text-[#6e6e6e]'>Quality Products, customized services</span>
                </div>
                <span>$15</span>
              </div> </li>
              <li><div className="flex justify-between items-center gap-20">
                <div className='flex flex-col'>
                  <a href="#" className='cursor-pointer text-xl hover:text-[#c47f5d] transition-all duration-500'>Manicure & Pedicure</a>
                  <span className='text-[#6e6e6e]'>Premium quality nail polishes</span>
                </div>
                <span>$34</span>
              </div> </li>
              <li><div className="flex justify-between items-center gap-20">
                <div className='flex flex-col'>
                  <a href="#" className='cursor-pointer text-xl hover:text-[#c47f5d] transition-all duration-500'>Hand / Nail Moisturizer</a>
                  <span className='text-[#6e6e6e]'>Elemental tempus getas</span>
                </div>
                <span>$60</span>
              </div> </li>
              <li><div className="flex justify-between items-center gap-20">
                <div className='flex flex-col'>
                  <a href="#" className='cursor-pointer text-xl hover:text-[#c47f5d] transition-all duration-500'>Nail Art</a>
                  <span className='text-[#6e6e6e]'>Vibrant colors, finishes</span>
                </div>
                <span>$46</span>
              </div> </li>

            </ul>
          </div>
        </div>

        <div className='appointment'>
          <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start py-10 my-5 bg-[#c28565] gap-3 text-white px-10 sm:px-16">
            <div className="appointment-header flex gap-3 items-center">
              <h3 className="flex items-center gap-3 text-lg">Make an Appointment</h3>
              <Image src={Decoration2white} alt='decoration2white' />
            </div>
            <h2 className="text-2xl md:text-4xl w-[85%] text-center lg:text-start">Experience the Magic of Our Nail Styling Services</h2>
          </div>


          <div className="appointment-container flex flex-col lg:flex-row items-center justify-center lg:mx-10 my-5">
            <div className="working-hours my-8 w-[80%] lg:w-1/2">
              <h3 className='text-xl'>Working Hours:</h3>
              <p className='text-[#6e6e6e] w-full lg:w-[75%] pt-3'>we are dedicated to delivering exceptional results and ensuring your nails make a bold and beautiful statement.</p>
              <ul className='flex flex-col gap-5 w-full lg:w-1/2 pt-6 text-black'>
                <li className='flex items-center justify-between pb-3 border-b border-[#c47f5d]'><span>Monday to Friday</span> <span>09:00am - 20:00pm</span></li>
                <li className='flex items-center justify-between pb-3 border-b border-[#c47f5d]'><span>Saturday</span> <span>10:00am - 18:00pm</span></li>
                <li className='flex items-center justify-between pb-3 border-b border-[#c47f5d]'><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
            <form action="form" className='bg-[#f4e8e1] w-full sm:w-[80%] lg:w-1/2 min-h-[300px] px-2 sm:px-5 py-5'>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-4">
                <input className='px-4 py-4 w-[90%]' type="text" name="name" placeholder='First Name' /><input className='px-4 py-4 w-[90%]' type="text" name="name" placeholder='Last name' />
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-4">
                <input className='px-4 py-4 w-[90%]' type="text" name="name" placeholder='Email Address' /><input className='px-4 py-4 w-[90%]' type="text" name="name" placeholder='Phone Number' />
              </div>
              <div className="flex flex-col gap-6 items-center">
                <select name="select" className='px-4 py-4 w-[90%]'>
                  <option value="">Select Subject</option>
                  <option value="">Spa & Massage</option>
                  <option value="">Facial & Massage</option>
                  <option value="">Head Massage</option>
                  <option value="">Sports Massage</option>
                  <option value="">Stone Massage</option>
                </select>
                <input type="date" name="date" placeholder='Select Date' className='px-4 py-4 w-[90%]' />
                <input type="time" name="time" placeholder='Select Time' className='px-4 py-4 w-[90%]' />

                <button className='bg-[#c47f5d] mt-6 text-white flex items-center justify-center gap-2 cursor-pointer py-4 px-4 w-[90%] hover:bg-white hover:text-black transition-all duration-500 ease-in'>MAKE AN APPOINTMENT <FaArrowRight /></button>
              </div>
            </form>
          </div>
        </div>

        <div className="products my-10">
          <div className="flex flex-col items-center gap-3 h-auto mx-auto">
            <h3 className="text-center text-lg text-[#c47f5d]">Our Products</h3>
            <Image src={Decoration} alt='decoration' />
            <h2 className="text-2xl md:text-4xl text-center">Professional Spa and Beauty Service</h2>
          </div>

          <div className="products-container my-10 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:flex items-center justify-center w-[90%] sm:w-[75%] mx-auto">
            {Products.map((p) => (
              <div key={p.name} className='product-card flex flex-col items-center justify-center h-auto min-w-[240px]'>
                <div className='bg-[#e8cdbf]'>{p.img}</div>
                <div className="flex details px-3 py-3 items-center w-full justify-between bg-[#ebe2dd]">
                  <div className="flex flex-col">
                    <h2 className='text-xl cursor-pointer hover:text-[#c47f5d] transition-all duration-500'>{p.name}</h2>
                    <p className='text-sm'>{p.Type}</p>
                  </div>
                  <span>{p.Price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="newsletter my-10 overflow-hidden relative">
          <div className='w-[105%] hidden xl:block'><Image src={Newsletter} alt='newsletter' /></div>
          <div className="flex flex-col gap-6 text-black xl:text-white items-center h-auto xl:absolute xl:right-[20%] xl:top-20">
            <h3 className="text-lg">Subscribe Newsletter</h3>
            <Image className='hidden xl:block' src={Decorationwhite} alt='decoration-white' />
            <Image className='xl:hidden block' src={Decoration} alt='decoration' />
            <h2 className="text-2xl md:text-4xl text-center">Sign Up To Get Updates & News About Us</h2>
            <input className='border-2 border-black xl:border-none w-[90%] sm:w-1/2 px-4 py-3' type="email" name="email" placeholder='Email Address' />
            <button className='bg-black flex items-center justify-center gap-2 text-white px-5 py-5 w-[90%] sm:w-1/2 hover:bg-white hover:text-black transition-all duration-500'>SUBSCRIBE NOW <FaArrowRight /></button>
          </div>
        </div>

        <div className="work-gallery my-10">
          <div className="flex flex-col items-center gap-3 h-auto mx-auto">
            <h3 className="text-center text-lg text-[#c47f5d]">Our Work Gallery</h3>
            <Image src={Decoration} alt='decoration' />
            <h2 className="text-2xl md:text-4xl text-center">Our Latest Gallery</h2>
          </div>

          <div className="gallery-container my-8 flex items-center overflow-hidden mx-auto w-[95%]">
            <Marquee autoFill speed={30}>
              {Gallery.map((g) => (
                <div key={g.number} className='gallery-card mx-5 h-[300px] w-[300px]'>
                  <div className='hover:scale-105 transition-all duration-300 ease-in'>{g.img}</div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="blog my-10">
          <div className="flex flex-col items-center gap-3 h-auto">
            <h3 className="text-center text-lg text-[#c47f5d]">Our Blog</h3>
            <Image src={Decoration} alt='decoration' />
            <h2 className="text-2xl md:text-4xl text-center">Our Latest News & Blog</h2>
          </div>

          <div className="blog-container my-10 gap-10 flex items-center justify-cen w-[90%] sm:w-[75%] mx-auto">
            <Marquee autoFill speed={40}>
              {Blog.map((b) => (
                <div key={b.number} className='gallery-card pb-3 flex flex-col items-center sm:items-start mx-5 gap-4 h-auto min-w-[280px] bg-[#e8cdbf]'>
                  <div className='mx-auto'>{b.img}</div>
                  <div className="flex items-center gap-5 text-sm py-2 px-3">
                    <span className='flex items-center gap-2 text-[#6e6e6e] hover:text-[#c47f5d] cursor-pointer transition-all duration-300'><FaRegUser className='text-[#c47f5d]' />Post by Admin</span>
                    <span className='flex items-center gap-2 text-[#6e6e6e] hover:text-[#c47f5d] cursor-pointer transition-all duration-300'><FaRegComments className='text-[#c47f5d]' />Comments (3)</span>
                  </div>
                  <h2 className='text-2xl px-3 text-center sm:text-start'>{b.header}</h2>
                  <span className='px-3'>{b.read}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="scroll-up absolute z-20 right-0 sm:right-2 bottom-0 m-2 sm:m-5">
          <button onClick={handleScrollup} className='h-12 w-12 rounded-full flex justify-center items-center bg-white border-4 text-[#c47f5d] border-[#c47f5d]'><FaArrowUp /></button>
        </div>

        <Footer />
      </div>
    </>
  );
}
