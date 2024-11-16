import React, { useState } from 'react';
import { Car, Home, Utensils, Recycle } from 'lucide-react';

const EnvironmentalCalculator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('transportation');

  const renderSection = () => {
    switch (activeSection) {
      case 'transportation':
        return <TransportationSection />;
      case 'energy':
        return <EnergySection />;
      case 'diet':
        return <DietSection />;
      case 'waste':
        return <WasteSection />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Environmental Impact Calculator</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 px-4 ${
              activeSection === 'transportation' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveSection('transportation')}
          >
            <Car className="inline-block mr-2" /> Transportation
          </button>
          <button
            className={`flex-1 py-2 px-4 ${
              activeSection === 'energy' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveSection('energy')}
          >
            <Home className="inline-block mr-2" /> Energy Use
          </button>
          <button
            className={`flex-1 py-2 px-4 ${
              activeSection === 'diet' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveSection('diet')}
          >
            <Utensils className="inline-block mr-2" /> Diet
          </button>
          <button
            className={`flex-1 py-2 px-4 ${
              activeSection === 'waste' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveSection('waste')}
          >
            <Recycle className="inline-block mr-2" /> Waste & Recycling
          </button>
        </div>
        {renderSection()}
      </div>
    </div>
  );
};

const TransportationSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transportation</h2>
      {/* Add form fields for transportation data */}
    </div>
  );
};

const EnergySection: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Energy Use</h2>
      {/* Add form fields for energy use data */}
    </div>
  );
};

const DietSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Diet</h2>
      {/* Add form fields for diet data */}
    </div>
  );
};

const WasteSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Waste & Recycling</h2>
      {/* Add form fields for waste and recycling data */}
    </div>
  );
};

export default EnvironmentalCalculator;