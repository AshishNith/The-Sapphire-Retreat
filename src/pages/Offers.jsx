function Offers() {
  const offers = [
    {
      title: 'Weekend Getaway',
      description: 'Enjoy a luxurious weekend stay with breakfast and spa access',
      price: '499',
      savings: '20%',
      validUntil: '2024-12-31',
      includes: [
        'Luxury accommodation',
        'Daily breakfast for two',
        'Complimentary spa access',
        'Late checkout until 2 PM'
      ]
    },
    {
      title: 'Honeymoon Package',
      description: 'Create unforgettable memories with our romantic package',
      price: '899',
      savings: '25%',
      validUntil: '2024-12-31',
      includes: [
        'Suite accommodation',
        'Romantic dinner for two',
        'Couples spa treatment',
        'Champagne on arrival'
      ]
    },
    {
      title: 'Business Travel',
      description: 'Perfect for the business traveler',
      price: '299',
      savings: '15%',
      validUntil: '2024-12-31',
      includes: [
        'Deluxe room',
        'Airport transfer',
        'Business center access',
        'Breakfast and dinner'
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Special Offers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="bg-accent text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
                  Save {offer.savings}
                </div>
                <h2 className="text-2xl font-semibold mb-2">{offer.title}</h2>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Package Includes:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {offer.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Valid until: {offer.validUntil}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-2xl font-bold">
                      ${offer.price}
                      <span className="text-sm text-gray-600">/night</span>
                    </p>
                    <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;