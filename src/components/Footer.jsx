import React from 'react';
import { Instagram, Youtube, Linkedin, Twitter, Facebook } from 'lucide-react';
import Aura from '../assets/header/Aura.png';

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="md:mx-10 mb-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
        <span className='text-2xl font-extrabold text-[#A76192] hover:text-[#8A4A7A] transition-all duration-300 cursor-pointer tracking-wide drop-shadow-md'>
  FrequencyHealing
</span>          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            At <span className="font-semibold">frequencyhealiing</span>, we are dedicated to helping individuals achieve inner peace, spiritual growth, and overall well-being through the power of frequency healing, mindfulness, and divine connection. Our mission is to guide you on a transformative journey of self-discovery, balance, and healing. Join us to elevate your soul and live a harmonious life.
          </p>
        </div>

        <div>
  <p className="text-xl font-medium mb-5 mt-10">COMPANY</p>
  <ul className="flex flex-col gap-2 text-gray-600 mt-20">
    <li>
      <NavLink 
        to="/" 
        end
        className={({ isActive }) => isActive ? 'text-[#A76192] font-bold' : ''}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'text-[#A76192] font-bold' : ''}
      >
        About us
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/products" 
        className={({ isActive }) => isActive ? 'text-[#A76192] font-bold' : ''}
      >
        Delivery
      </NavLink>
    </li>  
    <li>
      <NavLink 
        to="/terms-and-conditions" 
        className={({ isActive }) => isActive ? 'text-[#A76192] font-bold' : ''}
      >
        Terms and Conditions
      </NavLink>
    </li>  
    <li>
      <NavLink 
        to="/privacy-policy" 
        className={({ isActive }) => isActive ? 'text-[#A76192] font-bold' : ''}
      >
        Privacy policy
      </NavLink>
    </li>
  </ul>
</div>


        <div>
          <p className="text-xl font-medium mb-5 mt-10 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 mt-20">
            <li>+971 58 562 6983</li>
            <li>Support@frequencyhealiing.com</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <p className="text-sm text-gray-600">
          Copyright 2024 @ frequencyhealiing.com - All Rights Reserved.
        </p>
        {/* <div className="flex gap-4">
          <a
            href=" https://www.instagram.com/frequencyhealiing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#E4405F] transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href=" https://www.youtube.com/@FrequencyHealiing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#FF0000] transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href=" https://www.linkedin.com/in/frequency-healing-717a44352/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0077B5] transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/freqheal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#1DA1F2] transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61573061957517"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#4267B2] transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
