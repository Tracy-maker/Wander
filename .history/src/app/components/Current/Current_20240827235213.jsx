import React, { useState, useEffect } from "react";
import Temperature from "../Temperature/Temperature";
import SubText from "./components/SubText/SubText";
import Metas from "./components/Metas/Metas";

const Current = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex py-6 px-8 bg-cover bg-center bg-no-repeat justify-center items-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex py-6 px-8 bg-cover bg-center bg-no-repeat"> {/* Adjusted padding for a narrower layout */}
      <div className="flex-col text-center justify-center items-start space-y-2"> {/* Reduced spacing between items */}
        <div className="text-left text-6xl"> {/* Reduced font size for temperature */}
          <Temperature>{Math.round(data.main.temp)}</Temperature>
        </div>
        <div className="text-lg"> {/* Adjusted font size for subtext */}
          <SubText>{data.weather[0].main}</SubText>
        </div>
        <Metas data={data} />
      </div>
      <div className="flex-grow text-3xl text-right mt-2">{data.city}</div> {/* Adjusted font size and margin */}
    </div>
  );
};

export default Current;
