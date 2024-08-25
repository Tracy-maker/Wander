import React from "react";
import { useNavigate } from "react-router-dom";
import p3 from "../../assets/Home.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: `url(${p3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        <div className="relative z-10 max-w-screen-lg text-center px-8 py-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Welcome to WanderWhiz
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-light mb-8 leading-relaxed tracking-wide">
            ☀️ WanderWhiz is your ultimate travel companion, designed to provide
            you with the latest weather updates, explore international time
            zones, and navigate through maps with ease. Whether you're planning
            your next adventure or just curious about the world around you,
            WanderWhiz is here to make your journey brighter. Our app combines
            sophisticated technology with a user-friendly interface to bring you
            the most accurate and up-to-date information. Explore the world with
            WanderWhiz, your trusted guide in every journey. ☃️
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => navigate("/main")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
