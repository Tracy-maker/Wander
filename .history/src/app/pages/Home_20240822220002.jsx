import React from "react";
import { useNavigate } from "react-router-dom";
import p3 from "../../assets/Home.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${p3})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>

      <div className="relative z-10 max-w-3xl text-center p-8 bg-white/10 rounded-lg backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">
          Welcome to WanderWhiz
        </h1>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          ☀️ WanderWhiz is your ultimate travel companion, offering real-time weather updates, international time zones, and seamless map navigation. Whether planning your next trip or exploring from home, WanderWhiz is here to guide you every step of the way.
        </p>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          Our app blends sophisticated technology with an intuitive interface to provide the most accurate and up-to-date information, making your journey brighter and easier. Discover new horizons with WanderWhiz.
        </p>
        <button
          onClick={() => navigate("/main")}
          className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
