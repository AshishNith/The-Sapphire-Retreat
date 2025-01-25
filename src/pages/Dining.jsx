function Dining() {
  const restaurants = [
    {
      name: 'The Grand Restaurant',
      description: 'Fine dining with international cuisine',
      hours: '7:00 AM - 11:00 PM',
      cuisine: 'International',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Asian Fusion',
      description: 'Modern Asian cuisine with a twist',
      hours: '12:00 PM - 10:30 PM',
      cuisine: 'Asian Fusion',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Skyline Bar',
      description: 'Cocktails with a view',
      hours: '4:00 PM - 1:00 AM',
      cuisine: 'Bar & Lounge',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12 mt-10">Dining Experience</h1>
        
        {restaurants.map((restaurant, index) => (
          <div key={index} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h2 className="text-3xl font-semibold mb-4">{restaurant.name}</h2>
                <p className="text-gray-600 mb-6">{restaurant.description}</p>
                <div className="space-y-2">
                  <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                  <p><strong>Opening Hours:</strong> {restaurant.hours}</p>
                </div>
                <button className="mt-6 bg-orange-600 border border-white/20 text-white px-6 py-2 rounded hover:bg-opacity-90">
                  View Menu
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dining;