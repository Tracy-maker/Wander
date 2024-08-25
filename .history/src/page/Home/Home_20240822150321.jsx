import React from "react";
import { useNavigate } from "react-router-dom";
import p3 from "../../assets/Home.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `url(${p3})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0"></div>

      <div className="relative z-10 max-w-2xl text-center p-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Welcome to WanderWhiz
        </h1>
        <p className="text-lg text-white mb-6 leading-relaxed">
          ☀️ WanderWhiz is your ultimate travel companion, offering the latest weather updates, international time zones, and easy map navigation. Whether you're planning an adventure or just curious, WanderWhiz brightens your journey. Explore with confidence and stay informed with WanderWhiz, your trusted guide. ☃️
        </p>
        <button
          onClick={() => navigate("/main")}
          className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
