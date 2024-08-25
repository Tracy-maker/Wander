import React from "react";

import p4 from "../../assets/Resources.jpg";
import Typewriter from "typewriter-effect";

const Resources = () => {
  return (
    <>
      <div
        className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
        style={{ backgroundImage: `url(${p4})` }}
      >
        <div className="text-2xl text-white font-custom pt-4 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
          <Typewriter
            options={{
              strings: ["Back-end and data management"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-custom my-2 sm:my-4 md:my-6 lg:my-8 xl:my-10 mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 font-bold tracking-wide leading-7 sm:leading-8 md:leading-9 lg:leading-10">
            💻 Firebase powers the project's user management, providing secure
            login, registration, and authentication processes. This integration
            ensures user confidence in accessing the app's features, with robust
            identity verification and access control, bolstering trust and
            reliability.
          </p>
        </div>
        <div className="text-2xl text-white font-custom pt-4 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
          <Typewriter
            options={{
              strings: ["Front-end technologies"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-custom my-2 sm:my-4 md:my-6 lg:my-8 xl:my-10 mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 font-bold tracking-wide leading-7 sm:leading-8 md:leading-9 lg:leading-10">
            ⌨️ The main project utilizes a front-end technology stack that
            includes React, React Router, Tailwind CSS, Momentum Timezone, React
            Select Async Paginate, GitHub, and Axios.
          </p>
        </div>
        <div className="text-2xl text-white font-custom pt-4 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
          <Typewriter
            options={{
              strings: ["API"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-custom my-2 sm:my-4 md:my-6 lg:my-8 xl:my-10 mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 font-bold tracking-wide leading-7 sm:leading-8 md:leading-9 lg:leading-10">
            🖥 The data for the API is pulled from the following two websites: 1.
            https://openweathermap.org/api, 2.
            https://rapidapi.com/wirefreethought/api/geodb-cities
          </p>
        </div>
      </div>
    </>
  );
};

export default Resources;
