import { useState } from 'react'; import { Button } from '@/components/ui/button';

export default function StartDealPairing() { const [buyerConfirmed, setBuyerConfirmed] = useState(false); const [sellerConfirmed, setSellerConfirmed] = useState(false); const [counterpartyEmail, setCounterpartyEmail] = useState('');

const bothConfirmed = buyerConfirmed && sellerConfirmed;

return ( <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md"> <h2 className="text-2xl font-bold mb-4 text-center">Start a Deal - Pairing Confirmation</h2>

<div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Counterparty Email
    </label>
    <input
      type="email"
      value={counterpartyEmail}
      onChange={(e) => setCounterpartyEmail(e.target.value)}
      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="Enter other party's email"
    />
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div className="text-center">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Buyer Confirmation</p>
      <Button onClick={() => setBuyerConfirmed(true)} disabled={buyerConfirmed}>
        {buyerConfirmed ? 'Confirmed' : 'Confirm as Buyer'}
      </Button>
    </div>
    <div className="text-center">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Seller Confirmation</p>
      <Button onClick={() => setSellerConfirmed(true)} disabled={sellerConfirmed}>
        {sellerConfirmed ? 'Confirmed' : 'Confirm as Seller'}
      </Button>
    </div>
  </div>

  {bothConfirmed && (
    <div className="mt-6 text-center">
      <p className="text-green-600 font-semibold mb-2">Both parties confirmed!</p>
      <Button className="bg-green-600 hover:bg-green-700">Proceed to Deal Creation</Button>
    </div>
  )}
</div>

); }

    
