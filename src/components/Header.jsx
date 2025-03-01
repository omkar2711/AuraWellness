import React, { useState, useEffect } from 'react';
import SliderImage2 from '../assets/header/SliderImage2.png';
import SliderImage3 from '../assets/header/SliderImage3.png';
import SliderImage4 from '../assets/header/SliderImage4.png';
import { assets } from '../assets/assets'

const headerSlides = [
  {
    id: 1,
    title: 'Soul Healing',
    description: 'The Path to Inner Peace',
    image: SliderImage2
  },
  {
    id: 2,
    title: 'Soul Healing',
    description: 'Embracing Emotional Release',
    image: SliderImage3
  },
  {
    id: 3,
    title: 'Soul Healing',
    description: 'Transformative Practices for the Soul',
    image: SliderImage4
  }
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headerSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden rounded-lg mb-8">
      {headerSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
            <div className='mt-10'>
            <a href='/products' className='flex items-center gap-2 bg-white px-8 py-3 mt-20 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>
            
          </div>          
        </div>
      ))}
    </div>
  );
};

export default Header;
