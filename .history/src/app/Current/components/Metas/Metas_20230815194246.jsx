import Meta from "./components/Meta/Meta";

const Metas = ({data}) => {
  return (
    <div className="flex justify-center mt-1 text-center">
      <Meta title="HUMIDITY">{data.main.humidity} %</Meta>
      <div className="mx-8 border-2 border-white opacity-60"></div>
      <Meta title="WIND">{data.wind.speed} m/s</Meta>
    </div>
  );
};

export default Metas;
