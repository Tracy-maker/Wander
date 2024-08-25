import React from "react";
import Navbar from "../../app/Navbar/Navbar";
import p3 from "../../assets/Home.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: `url(${p3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

        <div className="relative z-10 max-w-screen-lg text-center px-8 py-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to Our Weather Wonderland
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-light mb-8 leading-relaxed">
            ☀️ Discover the latest weather updates in your city with ease. 
            Type your city name, and let us reveal the forecast for today and 
            the next five days. Whether it's sunny skies or a snowy day, 
            we've got you covered. Let’s make your day brighter with our weather magic! ☃️
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
