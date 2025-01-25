function About() {
  const managementTeam = [
    {
      name: 'John Smith',
      position: 'General Manager',
      image: '/team/gm.jpg',
      description: 'With over 20 years of experience in luxury hospitality.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      image: '/team/operations.jpg',
      description: 'Ensuring seamless service delivery across all departments.'
    },
    {
      name: 'Michael Chen',
      position: 'Executive Chef',
      image: '/team/chef.jpg',
      description: 'Award-winning culinary expert specializing in fusion cuisine.'
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Five Star Excellence Award',
      organization: 'Luxury Hotel Association'
    },
    {
      year: '2022',
      title: 'Best Luxury Hotel',
      organization: 'Tourism Awards'
    },
    {
      year: '2021',
      title: 'Sustainable Hospitality Award',
      organization: 'Green Hotels Initiative'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Luxury Hotel</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Since 1950, we have been setting the standard for luxury hospitality, creating unforgettable experiences for guests from around the world.
        </p>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1950, Luxury Hotel began as a small family-owned establishment with a vision to provide unparalleled hospitality services.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence, attention to detail, and dedication to guest satisfaction has earned us numerous accolades and a loyal clientele from around the globe.
            </p>
          </div>
          <div className="relative h-96">
            <img src="/about/hotel-history.jpg" alt="Hotel History" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Management Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Members */}
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl font-bold text-primary mb-4">{award.year}</div>
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;