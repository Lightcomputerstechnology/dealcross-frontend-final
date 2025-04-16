import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome to Dealcross</h1>
        <ThemeToggle />
      </header>

      <main>
        <p>This is the main landing page of Dealcross.</p>
        {/* Add your route outlet or content here */}
      </main>
    </div>
  );
};

export default App;
