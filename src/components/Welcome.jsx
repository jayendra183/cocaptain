import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Welcome = () => {
  const bulletinYears = [
    { year: '2022', active: false },
    { year: '2023', active: false },
    { year: '2024', active: false },
  ];

  // Updated photos array to use placeholder images
  const photos = [
    { src: "/images 0.jpeg", alt: "IOA Secretary Appreciation Award 1" },
    { src: "/images1.jpeg", alt: "IOA Secretary Appreciation Award 2" },
    { src: "/images7.jpeg", alt: "IOA Secretary Appreciation Award 3" },
    { src: "/images8.jpeg", alt: "IOA Secretary Appreciation Award 4" },
    { src: "/images 6.jpeg", alt: "IOA Secretary Appreciation Award 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, photos.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="border-l-4 border-gray-800 pl-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to Karnataka Orthopaedic Association
            </h1>
          </div>

          <h2 className="text-xl text-gray-700">
            Introducing a new online social community for the Karnataka Orthopaedic Association Members.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            This community has been setup for the Karnataka Orthopaedic Association Members and will attempt to be a high quality forum for academic discussion, provide an information sharing service for basic science and clinical practice research, be a discussion forum of contemporary issues, reports of relevant meetings, conferences, articles and publications.
          </p>

          <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
            explore more
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="relative h-72 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {photos[currentIndex].alt}
                </h3>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrev}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded text-sm ${
                  isAutoPlaying 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isAutoPlaying ? 'Pause' : 'Play'}
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Bulletin Card */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <span className="text-yellow-500 text-2xl">📄</span>
                KOA Bulletin
              </h3>
            </div>
            <div className="p-4">
              <div className="flex gap-4">
                {bulletinYears.map((item) => (
                  <button
                    key={item.year}
                    className={`px-4 py-2 rounded ${
                      item.active 
                        ? 'bg-gray-800 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;