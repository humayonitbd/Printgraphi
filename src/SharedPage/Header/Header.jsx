import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../assets/logo.jpeg';
import { FolderIcon, QuestionMarkCircleIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import {Swiper, SwiperSlide } from 'swiper/react';
import {  Scrollbar ,Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
// import './style.css'
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <div >
            <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100 py-5" >
            <div className="flex-1">
                <Link className=""><img className='h-full w-40' src={logo} alt="" /></Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control mr-10 md:mr-16 lg:mr-36">
                <input type="text" placeholder="Search" className="input input-bordered w-96  " />
                </div>
                {/* //start nav menu */}
                <ul className='flex'>
                    <li className='mr-8 text-sm'><Link to='/customer-care/help-center' ><span><QuestionMarkCircleIcon className='h-4 w-4 text-black inline mr-4'/></span>Help is here</Link></li>
                    <li className='mr-8 text-sm'><Link><span><FolderIcon className='h-4 w-4 text-black inline mr-4'/></span>My Projects</Link></li>
                    <li className='mr-8 text-sm'><Link><span><UserIcon className='h-4 w-4 text-black inline mr-4'/></span>Sign in</Link></li>
                    <li className=' text-sm'><Link><span><ShoppingCartIcon className='h-4 w-4 text-black inline mr-4'/></span>Cart</Link></li>
            
                    
                </ul>
                {/* //start nav menu */}





                <div className="dropdown dropdown-end lg:hidden ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
            {/* all category  */}

            <ul className='flex justify-between  items-center text-center'>
                <li className='text-sm'><Link>Deals</Link></li>
                <li className='text-sm'><Link>Buesness Card</Link></li>
                <li className='text-sm'><Link>PostCard & Print Advertice</Link></li>
                <li className='text-sm'><Link>Signs banner & Posters</Link></li>
                <li className='text-sm'><Link>Labels strikers & Pacaging</Link></li>
                <li className='text-sm'><Link>Home & Grips</Link></li>
                <li className='text-sm'><Link>Celebration & Invetetion & Stationary</Link></li>
                <li className='text-sm'><Link>Wedding</Link></li>
                <li className='text-sm'><Link>Clothing & Bags</Link></li>
                <li className='text-sm'><Link>Promotional Products</Link></li>
                <li className='text-sm'><Link>Website by Vista x Wix</Link></li>
                <li className='text-sm'><Link>Design & Logo</Link></li>
                <li className='text-sm'><Link>New Arrivals</Link></li>
            </ul>
            </div>


            {/* all category  */}
            <div className='bg-[#E7F3F0] flex justify-center items-center text-center h-16 mt-5'>
            <Swiper navigation={true} slidesPerView={1}>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default Header;