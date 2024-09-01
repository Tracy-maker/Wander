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
    <div className="flex py-6 px-8 bg-cover bg-center bg-no-repeat justify-between items-center">
      <div className="flex flex-col text-left justify-center space-y-2">
        <div className="text-6xl">
          <Temperature>{Math.round(data.main.temp)}</Temperature>
        </div>
        <div className="text-lg">
          <SubText>{data.weather[0].main}</SubText>
        </div>
        <Metas data={data} />
      </div>
      <div className="text-3xl text-right mt-2">
        {data.city}
      </div>
    </div>
  );
};

export default Current;
