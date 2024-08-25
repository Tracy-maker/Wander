import Meta from "./components/Meta/Meta";

const Metas = () => {
  return (
    <div className="flex justify-center mt-6 text-center">
      <Meta title="HUMIDITY">85%</Meta>
      <div className="mx-8 border-l border-white opacity-60"></div>
      <Meta title="WIND">1.34 K/M</Meta>
    </div>
  );
};

export default Metas;
