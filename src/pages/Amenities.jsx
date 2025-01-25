function Amenities() {
  const amenities = [
  {
    category: 'Wellness',
    items: [
      {
        name: 'Luxury Spa',
        description: 'Rejuvenate your body and mind with our premium spa treatments',
        image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg' // Spa Image
      },
      {
        name: 'Fitness Center',
        description: '24/7 access to state-of-the-art equipment and personal trainers',
        image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg' // Gym Image
      },
      {
        name: 'Swimming Pool',
        description: 'Indoor and outdoor pools with temperature control',
        image: 'https://images.pexels.com/photos/2611028/pexels-photo-2611028.jpeg' // Pool Image
      }
    ]
  },
  {
    category: 'Business',
    items: [
      {
        name: 'Business Center',
        description: 'Fully equipped business center with meeting rooms',
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg' // Business Center Image
      },
      {
        name: 'Conference Rooms',
        description: 'Multiple conference rooms with modern AV equipment',
        image: 'https://images.pexels.com/photos/1181308/pexels-photo-1181308.jpeg' // Conference Rooms Image
      }
    ]
  },
  {
    category: 'Recreation',
    items: [
      {
        name: 'Tennis Court',
        description: 'Professional tennis courts with equipment rental',
        image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg' // Tennis Court Image
      },
      {
        name: 'Kids Club',
        description: 'Supervised activities for children of all ages',
        image: 'https://images.pexels.com/photos/3662916/pexels-photo-3662916.jpeg' // Kids Club Image
      }
    ]
  }
];


  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12 mt-10">Hotel Amenities</h1>
        
        {amenities.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white/20 border border-white/60 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;