import Slider from 'react-slick';

function Gallery() {
  const categories = [
    {
      name: 'Rooms & Suites',
      images: ['/room-1.jpg', '/room-2.jpg', '/room-3.jpg', '/room-4.jpg']
    },
    {
      name: 'Dining',
      images: ['/dining-1.jpg', '/dining-2.jpg', '/dining-3.jpg', '/dining-4.jpg']
    },
    {
      name: 'Amenities',
      images: ['/amenity-1.jpg', '/amenity-2.jpg', '/amenity-3.jpg', '/amenity-4.jpg']
    },
    {
      name: 'Events',
      images: ['/event-1.jpg', '/event-2.jpg', '/event-3.jpg', '/event-4.jpg']
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Photo Gallery</h1>
        
        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">{category.name}</h2>
            <Slider {...sliderSettings}>
              {category.images.map((image, imageIndex) => (
                <div key={imageIndex} className="px-2">
                  <img
                    src={image}
                    alt={`${category.name} ${imageIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;