import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImage = "/image_1.jpg";

  const slides = [
    {
      title: "KOA ELECTIONS 2025",
      image: "/image_8.jpg",
      buttons: [
        { text: "KOA Election Nomination", link: "/election/nomination" },
        { text: "KOA Election Bid", link: "/election/bid" },
        { text: "KOA Election Code of Conduct", link: "/election/code-of-conduct" },
      ],
    },
    {
      title: "",
      image: "/image_9.png",
      subtitle: [
        "69th Annual Conference of Indian Orthopaedic Association",
        "Hosted By Karnataka Orthopaedic Association",
        "2nd - 7th December, 2024",
        "Bengaluru Palace"
      ],
      buttons: [
        { text: "Download Brochure", link: "/download-brochure", primary: true },
        { text: "Click Here for More Info", link: "/more-info", secondary: true },
      ],
    },
    {
      title: "CME & Basic Ilizarov Cadaveric Workshop",
      subtitle: "under the aegis of RGUHS, ASAMI India & KOA",
      details: [
        "11th May | 8:30 AM - 4:30 PM",
        "Auditorium Hall, BIMS Campus, Belagavi Institute of Medical Science, Belagavi."
      ],
      buttons: [
        { text: "View Event", link: "/view-event", primary: true }
      ],
    },
    {
      title: "IOA Membership Updatation",
      subtitle: "with Aadhar Extended",
      buttons: [
        { text: "Click here to read", link: "/membership-update", primary: true }
      ],
    },
    {
      title: "",
      image: "/image_10.png",
      subtitle: [
        "KOACON 2025",
        "49th State Conference of Karnataka Orthopaedic Association",
        "31st January | 1st & 2nd February, 2025",
        "Bengaluru"
      ],
      buttons: [
        { text: "Download Brochure", link: "/download-brochure", primary: true },
        { text: "Click Here for More Info", link: "/more-info", secondary: true },
      ],
    },
    {
      title: "",
      image: "/image_11.png",
      subtitle: [
        "PRESIDENTIAL THEME (2024-25)",
        "Collaborate – Share – Support"
      ],
      buttons: [
        { text: "Message from the president", link: "/president-message", primary: true }
      ],
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative py-8 md:py-12">
        <div className="text-center z-10">
          <>
            {slides[currentSlide].image && (
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title || slides[currentSlide].subtitle?.[0]}
                className="mx-auto mb-4 md:mb-8 h-32 md:h-40 lg:h-48 rounded-lg bg-white p-2"
              />
            )}
            {slides[currentSlide].title && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                {slides[currentSlide].title}
              </h2>
            )}
            {Array.isArray(slides[currentSlide].subtitle) ? (
              slides[currentSlide].subtitle.map((line, index) => (
                <p key={index} className="text-white text-lg md:text-xl lg:text-2xl mb-2">
                  {line}
                </p>
              ))
            ) : slides[currentSlide].subtitle && (
              <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white">
                {slides[currentSlide].subtitle}
              </p>
            )}
            {slides[currentSlide].details && 
              slides[currentSlide].details.map((detail, index) => (
                <p key={index} className="text-lg md:text-xl text-white mb-2">
                  {detail}
                </p>
              ))
            }
          </>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-6">
            {slides[currentSlide].buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded transition-colors duration-200 ${
                  button.primary
                    ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                    : button.secondary
                    ? "bg-gray-600 text-white hover:bg-gray-700"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}