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

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-10 h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className=" transparent backdrop-blur-sm border border-white/20 0 p-10 rounded-xl text-center text-white z-10">
          <h1 className="text-5xl text-nowrap font-bold mb-4">Experience Luxury Like Never Before</h1>
          {/* <button className="bg-[#F0A04B] text-white px-8 py-3 rounded-md text-lg hover:bg-opacity-90">
            Book Now
          </button> */}
        </div>
      {/* Quick Search */}

        <div className="  max-w-7xl mx-auto px-4">
          <div className="flex h-50 border border-white border-4 overflow-hidden text-white rounded-lg justify-center items-center backdrop-blur-sm ">
            <DatePicker selected={checkIn} onChange={date => setCheckIn(date)} className="h-[100 p-2 bg-transparent rounded-l-lg" placeholderText="Check-in Date" />
            <DatePicker selected={checkOut} onChange={date => setCheckOut(date)} className="h-[100% p-2 bg-transparent " placeholderText="Check-out Date" />
              <select value={guests} onChange={e => setGuests(e.target.value)} className="h-[100%  p-2 bg-transparent">
              {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Guests</option>)}
            </select>
            <select value={rooms} onChange={e => setRooms(e.target.value)} className=" p-2 bg-transparent">
              {[1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Rooms</option>)}
            </select>
            <button className="bg-orange-600  px-6 py-2  ">Search</button>
          </div>
        </div>



      </section>


      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature Cards */}
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

    

      {/* Testimonials */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
          <Slider {...sliderSettings}>
            {[
              {
                text: "An amazing experience! The staff was incredibly helpful and the amenities were top-notch.",
                author: "John Doe",
                role: "Business Traveler"
              },
              {
                text: "Perfect location, beautiful rooms, and excellent service. Will definitely return!",
                author: "Jane Smith",
                role: "Leisure Traveler"
              },
            ].map((testimonial, index) => (
              <div key={index} className="text-center px-8">
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}
    </div>
  );
}

export default Home;