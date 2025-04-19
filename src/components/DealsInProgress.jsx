// src/components/DealsInProgress.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const deals = [
  { title: "Website Design Deal", details: "John (Buyer) ↔ Sarah (Seller)", amount: "$350" },
  { title: "Crypto Exchange", details: "Alice ↔ Bob", amount: "$1,200" },
  { title: "Freelance Development", details: "David ↔ LightDev", amount: "$500" },
  { title: "Used Laptop Sale", details: "Chris ↔ Sandra", amount: "$280" },
  { title: "NFT Transfer", details: "Kofi ↔ Anika", amount: "$2,000" },
  { title: "Graphic Design", details: "Mercy ↔ JoeDesigns", amount: "$140" },
  { title: "Digital Art Deal", details: "Julia ↔ Ethan", amount: "$90" },
  { title: "Ecommerce Payment", details: "ShopBay ↔ Derrick", amount: "$760" },
  { title: "Domain Purchase", details: "Wale ↔ HostNet", amount: "$99" },
  { title: "Shipping Goods", details: "Logix ↔ Carlos", amount: "$430" }
];

const DealsInProgress = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % deals.length);
    }, 20000); // 20 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-950 py-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Deals in Progress</h2>
        <div className="relative h-48 md:h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full flex flex-col justify-center items-center px-6"
            >
              <div className="rounded-xl shadow-md p-6 bg-blue-900 text-white w-full max-w-md">
                <h3 className="text-xl font-semibold mb-2">{deals[current].title}</h3>
                <p className="text-md">{deals[current].details}</p>
                <p className="text-lg font-bold mt-2">{deals[current].amount}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DealsInProgress;
            
