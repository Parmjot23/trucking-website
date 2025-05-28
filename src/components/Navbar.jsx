import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/services" className="hover:underline">Services</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
