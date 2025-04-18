{open && (
  <>
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
      onClick={() => setOpen(false)}
    ></div>
    <div className="fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-900 p-6 space-y-4 z-50">
      <Link to="/" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
      <Link to="/deals" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Deals</Link>
      <Link to="/share-trading" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Share Trading</Link>
      <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>

      {/* Redesigned Buttons */}
      <div className="flex justify-start space-x-3 mt-4">
        <Link
          to="/login"
          onClick={() => setOpen(false)}
          className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full shadow-md"
          title="Login"
        >
          In
        </Link>
        <Link
          to="/signup"
          onClick={() => setOpen(false)}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-full shadow-md"
          title="Sign Up"
        >
          Up
        </Link>
      </div>

      <LanguageSwitcher />
    </div>
  </>
)}
