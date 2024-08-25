import Meta from "./components/Meta/Meta";

const Metas = ({data}) => {
  return (
    <div className="flex justify-center mt-4 text-center">
      <Meta title="HUMIDITY">{data.main.humidity}</Meta>
      <div className="mx-7 border-l border-white opacity-60"></div>
      <Meta title="WIND">1.34 K/M</Meta>
    </div>
  );
};

export default Metas;
