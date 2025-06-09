import { useState } from 'react';

const tabs = [
  { name: 'Positions(0)', key: 'tab1' },
  { name: 'Open Orders(0)', key: 'tab2' },
  { name: 'Order History', key: 'tab3' },
  { name: 'Position History', key: 'tab4' },
];

const tableData = {
  tab1: [
    { name: '06/03/2025 07:09:43', age: 'ETHUSDT', type:'Limit', side:'Buy', price:'97336.0', executed:'0.001', amount:'0.001', reduce:'No', status:"Completed"},
    { name: '06/03/2025 07:11:49', age: 'ETHUSDT', type:'Limit', side:'Sell', price:'97336.01', executed:'0.001', amount:'0.001', reduce:'No', status:"Pending"},
  ],
  tab2: [
    { name: '06/03/2025 07:18:55', age: 'ETHUSDT', type:'Limit', side:'Sell', price:'97336.01', executed:'0.001', amount:'0.001', reduce:'No', status:"Completed"},
    { name: '06/03/2025 07:23:23', age: 'ETHUSDT', type:'Market', side:'Buy', price:'97336.01', executed:'-', amount:'0.001', reduce:'No', status:"Completed"},
  ],
  tab3: [
    { name: '06/03/2025 07:12:00', age: 'ETHUSDT', type:'stopLimit', side:'Buy', price:'97336.01', executed:'0.001', amount:'0.001', reduce:'No', status:"Completed"},
    { name: '06/03/2025 07:11:49', age: 'ETHUSDT', type:'Limit', side:'Sell', price:'97336.01', executed:'0.001', amount:'0.001', reduce:'No', status:"Completed"},
  ],
  tab4: [
    { name: '06/03/2025 07:18:55', age: 'ETHUSDT', type:'Market', side:'Buy', price:'97336.01', executed:'-', amount:'0.001', reduce:'No', status:"Completed"},
    { name: '06/03/2025 07:11:49', age: 'ETHUSDT', type:'Limit', side:'Buy', price:'97336.01', executed:'0.001', amount:'0.001', reduce:'No', status:"Completed" },
  ],
};

const FutureOrderHistory = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="p-4">
      <div className="flex mb-4 overflow-x-scroll">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 font-medium border-b-2 transition ${
              activeTab === tab.key
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>


      <div className="overflow-x-scroll">
        <table className="min-w-full shadow rounded">
          <thead className="text-left">
            <tr className='dark:text-white whitespace-nowrap'>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Side</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Executed</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Reduce Only</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData[activeTab].map((item, index) => (
              <tr key={index} className="dark:text-white">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.age}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className={`px-4 py-2 font-medium ${ item.side === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>{item.side}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.executed}</td>
                <td className="px-4 py-2">{item.amount}</td>
                <td className="px-4 py-2">{item.reduce}</td>
                <td className={`px-4 py-2 font-medium ${ item.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FutureOrderHistory;
