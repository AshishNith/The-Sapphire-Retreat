import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="transparent fixed z-[1000] backdrop-blur-sm w-[100vw] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Luxury Hotel
            </Link>
          </div>
          <div className="hidden md:flex items-center font-bold space-x-4">
            <Link to="/" className="text-white  hover:text-primary px-3 py-2">Home</Link>
            <Link to="/rooms" className="text-white hover:text-primary px-3 py-2">Rooms</Link>
            <Link to="/dining" className="text-white hover:text-primary px-3 py-2">Dining</Link>
            <Link to="/amenities" className="text-white hover:text-primary px-3 py-2">Amenities</Link>
            <Link to="/offers" className="text-white hover:text-primary px-3 py-2">Offers</Link>
            <Link to="/contact" className="text-white hover:text-primary px-3 py-2">Contact</Link>
            <Link to="/booking" className="bg- text-white px-4 py-2 rounded-md hover:bg-opacity-90">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;