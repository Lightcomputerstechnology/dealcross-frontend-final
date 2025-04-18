import React, { useState } from 'react'

export default function ShareTrading() {
  const [role, setRole] = useState('buyer')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [duration, setDuration] = useState('standard')

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-semibold mb-4">Start a Deal</h2>
      <div className="bg-gray-800 p-6 rounded space-y-4">
        <label className="flex items-center space-x-4">
          <input
            type="radio"
            name="role"
            value="buyer"
            checked={role === 'buyer'}
            onChange={() => setRole('buyer')}
          />
          <span>Buyer</span>
          <input
            type="radio"
            name="role"
            value="seller"
            checked={role === 'seller'}
            onChange={() => setRole('seller')}
          />
          <span>Seller</span>
        </label>

        <input
          type="text"
          placeholder="Deal Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-3 rounded bg-gray-700"
        />

        <input
          type="email"
          placeholder="Counterparty Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-700"
        />

        <input
          type="number"
          placeholder="Amount (USD)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full p-3 rounded bg-gray-700"
        />

        <select
          value={duration}
          onChange={e => setDuration(e.target.value)}
          className="w-full p-3 rounded bg-gray-700"
        >
          <option value="standard">Standard</option>
          <option value="express">Express</option>
        </select>

        <button className="w-full bg-blue-500 py-3 rounded">
          Create Deal
        </button>
      </div>
    </div>
  )
}
