import React, { useState } from 'react';
import FarmCard from '../UIComponents/FarmCard';

const mockFarms = [
  {
    id: 1,
    title: 'ALPHASWAP-BUSD LP',
    apy: '29.2%',
    earned: 0,
    staked: 0,
    tokenIcons: ['/tokens/alphaswap.svg', '/tokens/busd.svg'],
    bscScanUrl: 'https://bscscan.com/address/0x...',
    isLive: true,
  },
  {
    id: 2,
    title: 'ALPHASWAP-BNB LP',
    apy: '29.2%',
    earned: 0,
    staked: 0,
    tokenIcons: ['/tokens/alphaswap.svg', '/tokens/bnb.svg'],
    bscScanUrl: 'https://bscscan.com/address/0x...',
    isLive: true,
  },
  {
    id: 3,
    title: 'ALPHASWAP-TETHER LP',
    apy: '29.2%',
    earned: 0,
    staked: 0,
    tokenIcons: ['/tokens/alphaswap.svg', '/tokens/usdt.svg'],
    bscScanUrl: 'https://bscscan.com/address/0x...',
    isLive: false,
  },
  
];

const FarmsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'earned' | 'staked' | ''>('');
  // const [expanded, setExpanded] = useState<number | null>(null);
  const [stakedOnly, setStakedOnly] = useState(false);
  const [showLive, setShowLive] = useState(true);
const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const filteredFarms = mockFarms
    .filter(farm => {
      // Filter by search term
      const matchesSearch = farm.title.toLowerCase().includes(searchTerm.toLowerCase());
      // Filter by staked only if enabled
      const matchesStakedOnly = !stakedOnly || farm.staked > 0;
      // Filter by live/finished status
      const matchesLiveStatus = showLive ? farm.isLive : !farm.isLive;
      
      return matchesSearch && matchesStakedOnly && matchesLiveStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'earned') return b.earned - a.earned;
      if (sortBy === 'staked') return b.staked - a.staked;
      return 0;
    });
const toggleCard = (id: number) => {
  setExpandedCards(prev => 
    prev.includes(id) 
      ? prev.filter(cardId => cardId !== id) // Remove if already expanded
      : [...prev, id] // Add if not expanded
  );
};
  return (
    <div className='bg-gradient-to-b from-purple-900 to-black'>
      <div className="container mx-auto px-4 py-8 text-white">
        <div className='flex md:justify-between gap-4 items-center justify-center flex-wrap'>
          <div>
        <h1 className="text-[40px] md:text-[100px] font-extrabold text-white leading-tight">Farms</h1>
        <p className="text-xl mb-[25px]">Stake LP tokens to Earn</p>
        </div>
     <div className="flex items-center bg-gradient-to-b from-[#1F277A] to-[#1D2472] shadow-xl h-[40px] rounded-full p-1">
              <button
                className={`px-3 py-1 rounded-full text-sm ${showLive ? 'bg-white text-black' : ''}`}
                onClick={() => setShowLive(true)}
              >
                Live
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm ${!showLive ? 'bg-white text-black' : ''}`}
                onClick={() => setShowLive(false)}
              >
                Finished
              </button>
            </div>
            </div>
        <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <label className="flex items-center space-x-2 text-sm">
              <input 
                type="checkbox" 
                className="form-checkbox" 
                checked={stakedOnly}
                onChange={(e) => setStakedOnly(e.target.checked)}
              />
              <span>Staked only</span>
            </label>
            
       
          </div>
          
          <div className='flex gap-4 flex-wrap'>
            <input
              type="text"
              placeholder="Search Farms"
              className="bg-gradient-to-b from-[#1F277A] to-[#1D2472] px-4 py-2 rounded-full outline-none text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              onChange={(e) => setSortBy(e.target.value as 'earned' | 'staked' | '')}
              className="bg-gradient-to-b from-[#1F277A] to-[#1D2472] px-4 py-2 rounded-full text-white"
              value={sortBy}
            >
              <option value="">Sort By</option>
              <option value="earned">Earned</option>
              <option value="staked">Total Staked</option>
            </select>
          </div>
        </div>

        {filteredFarms.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl">No farms found</p>
           
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {filteredFarms.map((farm) => (
  <FarmCard
    key={farm.id}
    farm={farm}
    showDetails={expandedCards.includes(farm.id)}
    onToggle={() => toggleCard(farm.id)}
  />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmsPage;