// File: src/pages/StartDealPage.jsx import React, { useState } from 'react'; import axios from 'axios';

const StartDealPage = () => { const [role, setRole] = useState('buyer'); const [title, setTitle] = useState(''); const [email, setEmail] = useState(''); const [amount, setAmount] = useState(''); const [escrowType, setEscrowType] = useState('standard'); const [category, setCategory] = useState('product'); const [message, setMessage] = useState(''); const [expectedDate, setExpectedDate] = useState(''); const [files, setFiles] = useState([]); const [status, setStatus] = useState(null);

const MAX_FILE_SIZE_MB = 10;

const handleFileChange = (e) => { const selectedFiles = Array.from(e.target.files); const validFiles = selectedFiles.filter( (file) => file.size / 1024 / 1024 <= MAX_FILE_SIZE_MB ); setFiles(validFiles); };

const handleSubmit = async (e) => { e.preventDefault(); const token = localStorage.getItem('token'); if (!token) { setStatus('Login required.'); return; }

const formData = new FormData();
formData.append('title', title);
formData.append('role', role);
formData.append('counterparty_email', email);
formData.append('amount', parseFloat(amount));
formData.append('escrow_type', escrowType);
formData.append('category', category);
formData.append('message', message);
if (expectedDate) formData.append('expected_completion', expectedDate);
files.forEach((file) => formData.append('attachments', file));

try {
  const response = await axios.post(
    'https://d-final.onrender.com/deals/create',
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  if (response.status === 200 || response.status === 201) {
    setStatus('Deal created successfully!');
    setTitle('');
    setEmail('');
    setAmount('');
    setEscrowType('standard');
    setCategory('product');
    setMessage('');
    setExpectedDate('');
    setFiles([]);
  } else {
    setStatus('Deal creation failed.');
  }
} catch (error) {
  setStatus(error.response?.data?.detail || 'Error creating deal.');
}

};

return ( <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12"> <form
onSubmit={handleSubmit}
className="w-full max-w-lg bg-[#1e293b] p-6 rounded-lg shadow-lg space-y-4"
encType="multipart/form-data"
> <h2 className="text-xl font-semibold text-center">Start a Deal</h2>

<div className="flex justify-center gap-4">
      {['buyer', 'seller'].map((r) => (
        <label key={r} className="flex items-center gap-2">
          <input
            type="radio"
            value={r}
            checked={role === r}
            onChange={() => setRole(r)}
            className="accent-blue-500"
          />
          {r.charAt(0).toUpperCase() + r.slice(1)}
        </label>
      ))}
    </div>

    <input
      type="text"
      placeholder="Deal Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
      className="w-full px-4 py-2 bg-gray-800 rounded"
    />
    <input
      type="email"
      placeholder="Counterparty Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full px-4 py-2 bg-gray-800 rounded"
    />
    <input
      type="number"
      placeholder="Amount (USD)"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      required
      className="w-full px-4 py-2 bg-gray-800 rounded"
    />

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full px-4 py-2 bg-gray-800 rounded"
    >
      <option value="product">Product / Goods</option>
      <option value="service">Service / Freelance</option>
      <option value="real-estate">Real Estate</option>
      <option value="vehicle">Vehicle / Transport</option>
    </select>

    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      rows="4"
      placeholder="Enter deal message or details..."
      className="w-full px-4 py-2 bg-gray-800 rounded"
    />

    <select
      value={escrowType}
      onChange={(e) => setEscrowType(e.target.value)}
      className="w-full px-4 py-2 bg-gray-800 rounded"
    >
      <option value="standard">Standard</option>
      <option value="milestone">Milestone</option>
    </select>

    <div>
      <label className="block mb-1 text-sm">
        Expected Completion Date:
      </label>
      <input
        type="date"
        value={expectedDate}
        onChange={(e) => setExpectedDate(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 rounded"
      />
    </div>

    <div>
      <label className="block mb-1 text-sm">
        Upload Proof / Files (max 10MB each):
      </label>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="w-full px-4 py-2 bg-gray-800 rounded text-white"
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
    >
      Create Deal
    </button>

    {status && <p className="text-center text-yellow-400 mt-2">{status}</p>}
  </form>
</div>

); };

export default StartDealPage;

            
