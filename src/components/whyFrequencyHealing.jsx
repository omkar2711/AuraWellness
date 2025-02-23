import React from 'react';
import HealingImage from '../assets/header/whyFrequencyHealing.webp';

const whyFrequencyHealing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg p-8 shadow-lg">
      {/* Left Side - Text */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">Why Frequency Healing</h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li>
            <strong>Balances Energy Flow in the Body:</strong> Frequency healing helps restore the natural flow of energy, allowing the body to function at its optimal level. By using sound or vibration frequencies, blockages in the body’s energy pathways can be cleared, promoting healing.
          </li>
          <li>
            <strong>Reduces Stress and Anxiety:</strong> Specific sound frequencies can help reduce stress, anxiety, and tension. Listening to soothing frequencies or binaural beats can help the brain relax, reducing emotional and physical strain.
          </li>
          <li>
            <strong>Promotes Emotional Healing and Clarity:</strong> Frequency healing can assist in releasing negative emotions stored in the body, allowing you to achieve mental clarity and emotional balance. It aids in processing emotions and finding peace within.
          </li>
          <li>
            <strong>Enhances Physical Healing and Wellness:</strong> Certain frequencies are believed to stimulate the body’s natural healing abilities, promoting tissue repair, pain relief, and overall physical well-being. These frequencies can also strengthen the immune system.
          </li>
        </ul>
      </div>
      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={HealingImage} alt="Frequency Healing" className="rounded-lg shadow-lg w-full h-auto" />
      </div>
    </div>
  );
};

export default whyFrequencyHealing;
