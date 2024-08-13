"use client";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const slides = [
    {
      title: "Zoomerr",
      description:
        "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
      author: "Author Name",
      role: "Role",
      icon: "/icons/zoomer.png",
    },
    {
      title: "ArtVenue",
      description:
        "Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.",
      author: "Author Name",
      role: "Role",
      icon: "/icons/artvenue.png",
    },
    {
      title: "ArtVenue",
      description:
        "Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.",
      author: "Author Name",
      role: "Role",
      icon: "/icons/artvenue.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Set the initial value based on the current window size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10">
      <button
        onClick={prevSlide}
        className="absolute  hidden lg:block left-2 lg:ml-[-7rem] top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl p-2 rounded-full z-30 md:left-4 lg:left-6"
      >
        &lt;
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${
              currentIndex * (isLargeScreen ? 50 : 100)
            }%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 flex-shrink-0 p-4"
              style={{ height: "auto" }}
            >
              <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-md h-full">
                <div className="flex gap-5 items-center mb-5 text-center">
                  <img src={slide.icon} className="w-8 h-8" alt="Icon" />
                  <h2 className="text-xl font-semibold">{slide.title}</h2>
                </div>
                <p className="text-center mb-4 mt-8">{slide.description}</p>
                <div className="flex items-center justify-center mt-auto">
                  <div className="h-10 w-10 bg-gray-300 rounded-full mr-4"></div>
                  <div className="text-center">
                    <h3 className="font-semibold">{slide.author}</h3>
                    <p>{slide.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute hidden lg:block lg:mr-[-7rem] right-0 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl p-2 rounded-full z-30 md:right-4 lg:right-6"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
