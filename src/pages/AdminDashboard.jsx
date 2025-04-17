import React from 'react';
import { FiUsers, FiAlertCircle, FiSettings, FiMessageSquare } from 'react-icons/fi';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] p-6 space-y-6">
        <h2 className="text-2xl font-bold">Dealcross</h2>
        <nav className="space-y-4">
          <button className="w-full text-left hover:text-blue-400">Dashboard</button>
          <button className="w-full text-left hover:text-blue-400">Deals</button>
          <button className="w-full text-left hover:text-blue-400">Users</button>
          <button className="w-full text-left hover:text-blue-400">Disputes</button>
          <button className="w-full text-left hover:text-blue-400">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-10">
        {/* Top Grid: Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-400">Pending Approval</h3>
            <p className="text-2xl font-bold mt-2">5</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-400">Fraud Alerts</h3>
            <p className="text-2xl font-bold mt-2 text-red-500">3</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-400">User Activity</h3>
            <p className="text-2xl font-bold mt-2">1,204</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-400">Refund Requests</h3>
            <p className="text-2xl font-bold mt-2">1</p>
          </div>
        </div>

        {/* Recent Deals */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Deals</h2>
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="grid grid-cols-2 text-sm text-gray-400 mb-2">
              <span>Deal</span>
              <span>Amount</span>
            </div>
            <div className="grid grid-cols-2 py-2 border-t border-gray-700">
              <span>Equipment Purchase</span>
              <span>$5,000.00</span>
            </div>
            <div className="grid grid-cols-2 py-2 border-t border-gray-700">
              <span>Web Design Services</span>
              <span>$1,200.00</span>
            </div>
            <div className="grid grid-cols-2 py-2 border-t border-gray-700">
              <span>Vehicle Sale</span>
              <span>$3,800.00</span>
            </div>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Fraud Alerts */}
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FiAlertCircle /> Fraud Alerts
            </h3>
            <ul className="text-sm space-y-2">
              <li>Suspicious activity by lenesie - 1m ago</li>
              <li>VPN Detected - morevillzos</li>
              <li>Unusual withdrawal - a few hours ago</li>
            </ul>
          </div>

          {/* System Notifications */}
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FiMessageSquare /> System Notifications
            </h3>
            <ul className="text-sm space-y-2">
              <li>Dispute by sarshee - 0:98</li>
              <li>New user: thomaswilfams</li>
              <li>Refund: robertsmith</li>
              <li>Approved for lucywhite</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
