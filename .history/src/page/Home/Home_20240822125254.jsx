import React from "react";
import Navbar from "../../app/Navbar/Navbar";
import p3 from "../../assets/Home.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${p3})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center text-center pt-8 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-white font-bold tracking-wide mb-8">
            "Welcome to our whimsical weather wonderland!"
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white font-light leading-relaxed sm:leading-loose">
            ☀️ Here, you don't need to chase rainbows to find the forecast;
            just type in the name of your city, and we'll conjure up the most
            enchanting weather details for you. Whether you're in search of
            sunshine, showers, or snowflakes, our weather forecast spells it
            all out, not just for today but for the next five days as well. So,
            get ready to embark on a magical meteorological journey as we paint
            the skies with the latest updates for your favorite places. Let's
            sprinkle a little weather magic into your day ☃️!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
