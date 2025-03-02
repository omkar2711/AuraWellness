import React from 'react';
import HealingMachineImage from '../assets/header/SliderImage2.png';

const Aurawellness = () => {
  const cards = [
    {
      title: 'Customized Frequency Calibration',
      description: 'Our frequency healing machines use specific frequencies that resonate with your body\'s energy systems. Whether you\'re seeking emotional healing, stress relief, or physical rejuvenation, our machines are calibrated to offer personalized sessions based on your unique needs.'
    },
    {
      title: 'Vibrational Healing for Deep Restoration',
      description: 'The core of our healing machines lies in the principle of vibrational therapy. These machines emit sound waves, electromagnetic pulses, or specific frequencies that interact with your cells and energy field, triggering a process of self-healing.'
    },
    {
      title: 'Non-Invasive, Safe & Relaxing Sessions',
      description: 'Frequency healing is a non-invasive method with no chemicals, needles, or harsh procedures involved. Sessions are comfortable and relaxing, allowing you to absorb the healing vibrations effortlessly.'
    },
    {
      title: 'Scientifically-Backed, Effective Results',
      description: 'Grounded in scientific research, our Frequency Healing Machines deliver measurable results, enhancing emotional well-being, reducing pain, and facilitating faster recovery for better health and vitality.'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">How We Work: Frequency Healing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {cards.map((card, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-[#f4c2c2] text-center">
            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>

      {/* <div className="mt-8 flex justify-center">
        <img src='https://le-cdn.hibuwebsites.com/d81d78ffdac741a0a071450d7406ca1d/dms3rep/multi/opt/PrecisionCare-PNG-640w.png' alt="Frequency Healing Machine" className="rounded-lg shadow-lg w-full h-auto md:w-2/3" />
      </div> */}
    </div>
  );
};

export default Aurawellness;
