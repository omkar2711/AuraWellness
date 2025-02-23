import React from 'react';
import HealingImage from '../assets/header/whyFrequencyHealing.webp';

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
      {/* Left Side - Text */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl text-primary font-bold mb-6">Why Frequency Healing</h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li>Balances Energy Flow in the Body</li>
          <li>Reduces Stress and Anxiety</li>
          <li>Promotes Emotional Healing and Clarity</li>
          <li>Enhances Physical Healing and Wellness</li>
        </ul>
      </div>
      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={HealingImage} alt="Frequency Healing" className="rounded-lg shadow-lg w-full h-auto" />
      </div>
    </div>
  );
};

export default SpecialityMenu;
