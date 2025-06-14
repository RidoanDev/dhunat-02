
import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    { id: 1, title: "Banner 1", color: "bg-blue-200", text: "Welcome to Dhunat Services" },
    { id: 2, title: "Banner 2", color: "bg-green-200", text: "Find Local Services Easily" },
    { id: 3, title: "Banner 3", color: "bg-purple-200", text: "Connect with Your Community" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative mx-4 mt-4 mb-2">
      <div className="aspect-[3/1] rounded-lg overflow-hidden shadow-md">
        <div 
          className={`${banners[currentSlide].color} w-full h-full flex items-center justify-center transition-all duration-500`}
        >
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {banners[currentSlide].title}
            </h2>
            <p className="text-sm text-gray-600">{banners[currentSlide].text}</p>
          </div>
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-2 space-x-1">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
