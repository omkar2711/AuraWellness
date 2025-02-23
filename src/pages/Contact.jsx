import React from 'react'
import { assets } from '../assets/assets'
import Image2 from '../assets/header/SampleImage2.jpeg'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={Image2} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Building A1, Dubai Digital Park, Dubai Silicon Oasis, <br /> Dubai, United Arab Emirate</p>
          <p className=' text-gray-500'>Tel: +971 58 562 6983 <br /> Email: aurawellnesssolutions@gmail.com</p> */}
        </div>
      </div>

    </div>
  )
}

export default Contact
