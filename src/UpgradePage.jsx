// File: src/pages/UpgradePage.jsx

import React, { useState } from 'react'; import { Helmet } from 'react-helmet'; import { toast } from 'react-hot-toast'; import { FiCreditCard, FiDollarSign, FiBitcoin, FiArrowRight } from 'react-icons/fi';

const UpgradePage = () => { const [selectedPlan, setSelectedPlan] = useState(null); const [selectedPayment, setSelectedPayment] = useState(null);

const plans = [ { id: 'pro', name: 'Pro', price: 20, benefits: ['Lower fees', 'Priority KYC', 'Investor tools'] }, { id: 'business', name: 'Business', price: 50, benefits: ['All Pro features', 'Business analytics', 'Higher limits'] } ];

const payments = [ { id: 'stripe', name: 'Stripe (Card)', icon: <FiCreditCard /> }, { id: 'paystack', name: 'Paystack', icon: <FiDollarSign /> }, { id: 'flutterwave', name: 'Flutterwave', icon: <FiDollarSign /> }, { id: 'btc', name: 'Bitcoin (BTC)', icon: <FiBitcoin /> }, { id: 'usdt', name: 'USDT (Tether)', icon: <FiDollarSign /> }, ];

const handleUpgrade = () => { if (!selectedPlan || !selectedPayment) { toast.error('Select a plan and payment method'); return; } toast.success(Proceeding with ${selectedPlan} via ${selectedPayment}); // TODO: Implement actual payment integration here };

return ( <> <Helmet> <title>Upgrade - Dealcross</title> </Helmet> <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10"> <div className="max-w-4xl mx-auto space-y-10"> <h1 className="text-3xl font-bold text-center">Upgrade Your Account</h1>

{/* Plans */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Choose Your Plan</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 border rounded-lg cursor-pointer ${selectedPlan === plan.id ? 'border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-semibold mb-4">${plan.price}</p>
              <ul className="text-sm space-y-1">
                {plan.benefits.map((benefit, i) => <li key={i}>- {benefit}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {payments.map((method) => (
            <div
              key={method.id}
              className={`p-4 flex items-center gap-3 border rounded-lg cursor-pointer ${selectedPayment === method.id ? 'border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}
              onClick={() => setSelectedPayment(method.id)}
            >
              {method.icon}
              <span>{method.name}</span>
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={handleUpgrade}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mx-auto"
      >
        Proceed to Payment <FiArrowRight />
      </button>
    </div>
  </div>
</>

); };

export default UpgradePage;

