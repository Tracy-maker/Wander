import { useState, useEffect } from "react";
import Meta from "./components/Meta/Meta";

const Metas = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center text-center">
      <Meta title="HUMIDITY">{data.main.humidity} %</Meta>
      <div className="mx-8 border-2 border-white opacity-60"></div>
      <Meta title="WIND">{data.wind.speed} m/s</Meta>
    </div>
  );
};

export default Metas;
