import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Rooms() {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      description: 'Spacious room with city view',
      price: 299,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['King Bed', 'City View', 'Free Wi-Fi', 'Mini Bar']
    },
    {
      id: 2,
      name: 'Executive Suite',
      description: 'Luxury suite with separate living area',
      price: 499,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['King Bed', 'Ocean View', 'Living Room', 'Jacuzzi']
    },
      {
        id: 3,
        name: 'Family Room',
        description: 'Perfect for families with children',
        price: 399,
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        amenities: ['2 Queen Beds', 'Park View', 'Kids Area', 'Kitchenette']
      },{
        id: 3,
        name: 'Family Room',
        description: 'Perfect for families with children',
        price: 399,
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        amenities: ['2 Queen Beds', 'Park View', 'Kids Area', 'Kitchenette']
      },{
        id: 3,
        name: 'Family Room',
        description: 'Perfect for families with children',
        price: 399,
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
        amenities: ['2 Queen Beds', 'Park View', 'Kids Area', 'Kitchenette']
      }
  ];

  return (
    <div className="py-12">
      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl text-white font-bold text-center mt-10 mb-12">Our Rooms & Suites</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map(room => (
            <div key={room.id} className="bg-white/60 border border-white/20 rounded-lg shadow-lg overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Room Amenities:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {room.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">${room.price}<span className="text-sm text-gray-600">/night</span></p>
                  <Link to="/booking" className="bg-orange-600 border border-white/10  text-white px-6 py-2 rounded hover:bg-opacity-90">Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;