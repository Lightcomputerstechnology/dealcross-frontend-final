import React, { useState, useEffect } from 'react';
import axios from 'axios';

const mockDeals = [
  { title: 'iPhone 14 Pro Purchase - Sarah', amount: '$1,200', status: 'In Escrow' },
  { title: 'Helena paying for Web Dev', amount: '$4,200', status: 'Locked' },
  { title: 'Amazon Order Deal - Tom', amount: '$300', status: 'Pending' },
  { title: 'Design Contract - Bryan', amount: '$1,000', status: 'Secured' },
  { title: 'Crypto Exchange - Kelvin', amount: '$5,000', status: 'Locked' },
  { title: 'Used Car Purchase - Mike', amount: '$6,800', status: 'In Progress' },
  { title: 'Furniture Delivery - Tina', amount: '$2,100', status: 'Completed' },
  { title: 'Freelance Video Edit - Joe', amount: '$400', status: 'In Escrow' },
  { title: 'School Payment - Amanda', amount: '$3,500', status: 'Active' },
  { title: 'Consulting Payment - Chloe', amount: '$1,800', status: 'Escrowed' },
];

const DealsInProgress = () => {
  const [allDeals, setAllDeals] = useState(mockDeals);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch public real deals from backend
    axios.get('https://d-final.onrender.com/deals/public')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const realDeals = res.data.map((deal) => ({
            title: `${deal.title} - ${deal.dealer_name || 'User'}`,
            amount: `$${deal.amount}`,
            status: deal.status || 'Pending',
          }));
          setAllDeals(prev => [...realDeals, ...prev]); // Add real deals before mock
        }
      })
      .catch((err) => {
        console.error('Failed to fetch real deals:', err.message);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allDeals.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [allDeals]);

  const currentDeal = allDeals[currentIndex];

  return (
    <section className="py-12 bg-white dark:bg-gray-950 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Deals in Progress
      </h2>

      <div className="max-w-md mx-auto">
        <div
          key={currentIndex}
          className="bg-blue-900 text-white rounded-2xl shadow-xl p-6 animate-[slideInFromRight_1s_ease-out]"
        >
          <h3 className="text-xl font-semibold mb-2">{currentDeal.title}</h3>
          <p className="text-lg">
            <strong>Amount:</strong> {currentDeal.amount}
          </p>
          <p className="text-sm">
            <strong>Status:</strong> {currentDeal.status}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealsInProgress;
