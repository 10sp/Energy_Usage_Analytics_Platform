import React, { useState } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';

interface EnergyData {
  date: string;
  fuel: number;
  electricity: number;
  gas: number;
}

const energyData: EnergyData[] = [
  { date: '2023-01-01', fuel: 100, electricity: 200, gas: 50 },
  { date: '2023-01-02', fuel: 120, electricity: 220, gas: 60 },
  { date: '2023-01-03', fuel: 110, electricity: 210, gas: 55 },
  { date: '2023-01-04', fuel: 130, electricity: 230, gas: 65 },
  { date: '2023-01-05', fuel: 105, electricity: 205, gas: 50 },
];

const EnergyMonitor = () => {
  const [activeTab, setActiveTab] = useState('fuel');
  const [energyType, setEnergyType] = useState('fuel');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setEnergyType(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Energy Monitor</h1>
      <div className="flex flex-wrap justify-center mb-4">
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded py-2 px-4 mr-2 ${
            activeTab === 'fuel' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleTabChange('fuel')}
        >
          Fuel
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded py-2 px-4 mr-2 ${
            activeTab === 'electricity' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleTabChange('electricity')}
        >
          Electricity
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded py-2 px-4 ${
            activeTab === 'gas' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleTabChange('gas')}
        >
          Gas
        </button>
      </div>
      <LineChart width={800} height={400} data={energyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={energyType} stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      <div className="flex flex-wrap justify-center mt-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-2">Real-time Analytics</h2>
          <p className="text-lg">
            Our platform provides real-time analytics and actionable insights to help you reduce your energy costs and carbon footprint.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-2">Energy Cost Reduction</h2>
          <p className="text-lg">
            Our platform helps you identify areas of energy inefficiency and provides recommendations to reduce your energy costs.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-2">Carbon Footprint Reduction</h2>
          <p className="text-lg">
            Our platform helps you reduce your carbon footprint by providing insights into your energy consumption and recommending ways to reduce it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergyMonitor;