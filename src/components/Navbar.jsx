import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="transparent fixed z-[1000] backdrop-blur-sm w-[100vw] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Luxury Hotel
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center font-bold space-x-4">
            <Link to="/" className="text-white hover:text-primary px-3 py-2">Home</Link>
            <Link to="/rooms" className="text-white hover:text-primary px-3 py-2">Rooms</Link>
            <Link to="/dining" className="text-white hover:text-primary px-3 py-2">Dining</Link>
            <Link to="/amenities" className="text-white hover:text-primary px-3 py-2">Amenities</Link>
            <Link to="/offers" className="text-white hover:text-primary px-3 py-2">Offers</Link>
            <Link to="/contact" className="text-white hover:text-primary px-3 py-2">Contact</Link>
            <Link to="/booking" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-opacity-90">
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-sm rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-white hover:text-primary px-3 py-2">Home</Link>
              <Link to="/rooms" className="text-white hover:text-primary px-3 py-2">Rooms</Link>
              <Link to="/dining" className="text-white hover:text-primary px-3 py-2">Dining</Link>
              <Link to="/amenities" className="text-white hover:text-primary px-3 py-2">Amenities</Link>
              <Link to="/offers" className="text-white hover:text-primary px-3 py-2">Offers</Link>
              <Link to="/contact" className="text-white hover:text-primary px-3 py-2">Contact</Link>
              <Link to="/booking" className="bg-orange-600 text-white px-4 py-2 rounded-md text-center hover:bg-opacity-90">
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;