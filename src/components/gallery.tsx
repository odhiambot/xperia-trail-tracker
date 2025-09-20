import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExploreGallery = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);

  const images = [
    {
      src: "/images/heroSection.png",
      alt: "Mountain adventure with scenic lake view",
      size: "large"
    },
    {
      src: "/images/photo1.png",
      alt: "Adventurers exploring together",
      size: "medium"
    },
    {
      src: "/images/story.png",
      alt: "Green pathway adventure",
      size: "large"
    },
    {
      src: "/images/teambuilding.png",
      alt: "Rock climbing adventure",
      size: "medium"
    },
    {
      src: "/images/waterfall.png",
      alt: "Mountain hiking",
      size: "large"
    }
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    // Temporarily pause auto-scroll when user manually scrolls
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    // Temporarily pause auto-scroll when user manually scrolls
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollInterval.current = setInterval(() => {
        if (scrollContainerRef.current && isAutoScrolling) {
          const container = scrollContainerRef.current;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          
          // If we've reached the end, scroll back to the beginning
          if (container.scrollLeft >= maxScrollLeft - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 3000); // Auto-scroll every 3 seconds
    };

    if (isAutoScrolling) {
      startAutoScroll();
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isAutoScrolling]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-white mb-6">Explore Gallery</h2>
            <p className="text-gray-400 text-lg max-w-lg  leading-relaxed">
              Here is to some of our recent adventures. Join us to create your own unforgettable memories!
            </p>
          </div>
        </div>

        {/* Gallery Container */}
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-400 hover:bg-orange-500 rounded-full p-4 shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-400 hover:bg-orange-500 rounded-full p-4 shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Scrollable Gallery */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  image.size === 'large' 
                    ? 'w-96 h-80' 
                    : 'w-96 h-80'
                }`}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Photos Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
            View All Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreGallery;