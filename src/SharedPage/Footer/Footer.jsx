import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from '../../assets/apy.png';
import favicon from '../../assets/favicon-removebg-preview.png';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    return (
        <div>
            <footer className=" pb-10 pt-28 px-10 bg-neutral text-neutral-content">
  <div className='grid md:grid-cols-4 gap-8'>
  <nav className=''>
    <img className='mb-10 w-8' src={favicon} alt="" />
    <header className="footer-title">VistaPrint is<Link>Absolutely Guaranteed.</Link></header> 
    <p className="link link-hover">Every time. Any reason. Or we'll make it right.</p> 
    <hr className=' text-white w-full border-1 mt-5' />
  </nav> 
  <nav className=''>
    <header className="footer-title">Let Us Help</header> 
    <p className='mb-2'><Link className="link link-hover " >Shipping</Link></p>
    <p className='mb-2' ><Link className="link link-hover" >Contact & Support</Link></p>
    <p className='mb-2' ><Link className="link link-hover" >All Products</Link></p>
    <p className='mb-2' ><Link className="link link-hover" >Ideas & Advice</Link></p>
    <p className='mb-2' ><Link className="link link-hover" >Reseller Program</Link></p>
    <p><Link className="link link-hover" >Accessibility</Link></p>
  </nav> 
  <nav className=''>
    <header className="footer-title">Our Company</header> 
    <p className='mb-2' ><Link className="link link-hover" >About us</Link></p>
    <p className='mb-2' ><Link className="link link-hover" >Careers</Link></p>
    <p className='mb-2' ><Link className="link link-hover" >For Investors</Link></p>
    <p className='mb-2' ><Link className="link link-hover" >For Media</Link></p>
    <p className='mb-2' ><Link className="link link-hover" >Sustainability</Link></p>
    <p><Link className="link link-hover" >Do Not Sell Or Share My Info</Link></p>
  </nav> 
  
  
  
</div> 

<div className='pt-16 flex justify-between  '>

<nav className=''>
   <div className='flex '>
    <p className='mr-3'><Link className="link" >1.866.207.4955</Link></p>
    <p className='mr-3'><Link className="link" >Home</Link></p>
    <p className='mr-3'><Link className="link" >Privacy and Cookie Policy</Link></p>
    <p className='mr-3'><Link className="link" >Terms and Conditions</Link></p>
    <p><Link className="link " >Legal Notice</Link></p>
   </div>
   <p className='text-stone-400 mt-5'>A CIMPRESS company © 2001-2023 VistaPrint. All rights reserved.</p>
   <p className='text-stone-400'>Unless stated otherwise, prices are exclusive of delivery and product options.</p>
  </nav>

<nav className=''>
<div className='flex '>
    <img className='w-12 rounded mr-5' src={footerImage} alt="" />
    <img className='w-12 rounded mr-5' src={footerImage} alt="" />
    <img className='w-12 rounded' src={footerImage} alt="" />
</div>
  </nav>
<nav className=''>
    <div className='flex justify-between items-center'>
        <UserCircleIcon className='h-6 w-6 text-white' />
        <UserCircleIcon className='h-6 w-6 text-white' />
        <UserCircleIcon className='h-6 w-6 text-white' />
        <UserCircleIcon className='h-6 w-6 text-white' />
    </div>
    
  </nav>
  <nav>
    <p>flug icon</p>
  </nav>
</div>
  
</footer>
        </div>
    );
};

export default Footer;