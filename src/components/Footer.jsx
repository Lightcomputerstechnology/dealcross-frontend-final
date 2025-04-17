import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-6">
      <div className="max-w-6xl mx-auto text-center px-6">
        © {new Date().getFullYear()} Dealcross. All rights reserved.
      </div>
    </footer>
  )
}
