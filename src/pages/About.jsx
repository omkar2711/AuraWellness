import React from 'react'
import { assets } from '../assets/assets'
import Image from '../assets/header/contactUsImage.jpeg'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={Image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
<p>At Aura Wellness, we believe in the profound power of healing through the mind, body, and soul. Our mission is to empower individuals to reconnect with their true essence, embrace inner peace, and embark on a journey of personal transformation. Through our unique approach, we offer a range of holistic services and products designed to support your wellness at every level.</p>
<p>At Aura Wellness, we focus on an integrative approach to healing that combines ancient wisdom with modern techniques. We understand that true wellness is not just about physical health but about nourishing your soul, balancing your emotions, and aligning with your higher purpose.
We offer a variety of services and products that cater to individuals seeking healing, clarity, and spiritual awakening. From our frequency healing machines to guided meditations and spiritual connection kits, every offering is designed to help you nurture your mind, body, and spirit.</p>          
<b className='text-gray-800'>Our Vision</b>
<p>Our vision is to create a harmonious world where individuals can live in balance with themselves and their surroundings. We aim to guide people toward optimal health and spiritual enlightenment by utilizing the powerful energies of frequency healing, meditation, and divine connection.</p>        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Holistic Healing:</b>
          <p>We offer a blend of practices that heal the body, mind, and soul</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Quality & Integrity: </b>
          <p>We are committed to providing only the highest quality products and services that truly support your wellness journey.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalized Experience:</b>
          <p >Whether through personalized frequency healing or tailored meditation sessions, we cater to your unique needs.</p>
        </div>
      </div>

    </div>
  )
}

export default About
