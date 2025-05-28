import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow text-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <ul className="flex space-x-6 font-semibold">
          <li><a href="#" className="hover:text-orange-600">Shippers</a></li>
          <li><a href="#" className="hover:text-orange-600">Carriers</a></li>
          <li><a href="#" className="hover:text-orange-600">Resources</a></li>
          <li><a href="#" className="hover:text-orange-600">Equipment</a></li>
          <li><a href="#" className="hover:text-orange-600">Company</a></li>
        </ul>
        <button className="p-2 text-gray-600 hover:text-orange-600" aria-label="Search">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M13.293 14.707a8 8 0 111.414-1.414l4.243 4.243-1.414 1.414-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
