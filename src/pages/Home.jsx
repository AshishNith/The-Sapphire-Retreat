import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Slider from 'react-slick';
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleSearch = () => {
    // Search functionality will be added here
    console.log('Searching with:', { checkIn, checkOut, guests, rooms });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-10 h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="transparent backdrop-blur-sm border border-white/20 p-4 md:p-10 rounded-xl text-center text-white z-10 mx-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 whitespace-normal">Experience Luxury Like Never Before</h1>
        </div>

        {/* Quick Search */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row h-auto md:h-14 border border-white border-4 overflow-hidden text-white rounded-lg justify-center items-center backdrop-blur-sm gap-2 md:gap-0 p-2 md:p-0">
            <DatePicker 
              selected={checkIn} 
              onChange={date => setCheckIn(date)} 
              className="w-full md:w-auto h-10 md:h-full p-2 bg-transparent rounded-lg md:rounded-l-lg md:rounded-r-none" 
              placeholderText="Check-in Date" 
              minDate={new Date()}
            />
            <DatePicker 
              selected={checkOut} 
              onChange={date => setCheckOut(date)} 
              className="w-full md:w-auto h-10 md:h-full p-2 bg-transparent rounded-lg md:rounded-none" 
              placeholderText="Check-out Date" 
              minDate={checkIn}
            />
            <select 
              value={guests} 
              onChange={e => setGuests(Number(e.target.value))} 
              className="w-full md:w-auto h-10 md:h-full p-2 bg-transparent rounded-lg md:rounded-none"
            >
              {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Guests</option>)}
            </select>
            <select 
              value={rooms} 
              onChange={e => setRooms(Number(e.target.value))} 
              className="w-full md:w-auto h-10 md:h-full p-2 bg-transparent rounded-lg md:rounded-none"
            >
              {[1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Rooms</option>)}
            </select>
            <button 
              className="w-full md:w-auto bg-orange-600 px-6 py-2 rounded-lg md:rounded-r-lg md:rounded-l-none hover:bg-orange-700 transition-colors"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Free Wi-Fi', icon: '🌐' },
              { title: 'Swimming Pool', icon: '🏊‍♂️' },
              { title: '24/7 Room Service', icon: '🛎️' },
              { title: 'Spa & Wellness', icon: '💆‍♀️' },
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white/20 p-4 rounded-lg shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;