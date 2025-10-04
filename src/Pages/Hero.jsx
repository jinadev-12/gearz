import React from "react";
import heroBg from "../Assets/heroBg2.jpg";


function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="bg-black/40">
        {/* Container */}
        <div className="max-w-[1300px] mx-auto px-6 py-8 lg:py-20 flex flex-col gap-20 text-white">
          {/* Details */}
          <div className="max-w-xl space-y-6">
            {/* Custom Cruise with line */}
            <div className="flex items-center gap-2">
              <p className="tracking-wider">Custom Cruise</p>
              <div className="h-[1px] w-8 bg-white"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-logo1 tracking-wider">Throttle Position Sensor</h1>
            <p className="text-sm lg:text-lg leading-relaxed">
              This data is crucial for the ECU/PCM to determine the appropriate
              fuel injection and ignition timing for optimal engine performance
              and fuel efficiency. Essentially, the TPS provides real-time
              feedback to the vehicle's computer system.
            </p>

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="px-5 py-2 bg-red-600 font-light text-white rounded-full">
                View Collection
              </button>
              <button className="px-5 py-2 bg-transparent rounded-full hover:bg-white hover:text-black transition font-light">
                Shop Now <i className="ri-arrow-right-up-line ml-2"></i>
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="services-container flex flex-wrap justify-center md:justify-start gap-4 md:gap-12 lg:gap-16 mt-12 text-center">
            {/* Tires */}
            <div className="flex flex-col items-center gap-3">
              <i className="fas fa-car text-3xl"></i>
              <span className="text-sm md:text-base lg:text-lg">TIRES</span>
            </div>
            {/* Engine */}
            <div className="flex flex-col items-center gap-3">
              <i className="fas fa-cogs text-3xl"></i>
              <span className="text-sm md:text-base lg:text-lg">ENGINE</span>
            </div>
            {/* Battery */}
            <div className="flex flex-col items-center gap-3">
              <i className="fas fa-car-battery text-3xl"></i>
              <span className="text-sm md:text-base lg:text-lg">BATTERY</span>
            </div>
            {/* Oil */}
            <div className="flex flex-col items-center gap-3">
              <i className="fas fa-oil-can text-3xl"></i>
              <span className="text-sm md:text-base lg:text-lg">OIL</span>
            </div>
            {/* Brake */}
            <div className="flex flex-col items-center gap-3">
              <i className="fas fa-tools text-3xl"></i>
              <span className="text-sm md:text-base lg:text-lg">BRAKE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
