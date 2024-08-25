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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-0"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-white font-extrabold tracking-wide mb-6 opacity-0 animate-fadeIn">
            Welcome to Our Whimsical Weather Wonderland
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-white font-medium leading-relaxed sm:leading-loose opacity-0 animate-fadeIn animation-delay-500">
            ☀️ No need to chase rainbows to find the forecast—just type in your city, and we'll conjure up the most enchanting weather details. Whether you're looking for sunshine, showers, or snowflakes, we spell it all out, not just for today but for the next five days. Embark on a magical meteorological journey with the latest updates for your favorite places. Let's sprinkle a little weather magic into your day ☃️!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
