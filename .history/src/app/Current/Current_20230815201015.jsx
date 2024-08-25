import p2 from "../../assets/background2.jpg";
import Temperature from "../../components/Temperature/Temperature";
import SubText from "./components/SubText/SubText";
import Metas from "./components/Metas/Metas";

const Current = ({data}) => {
  return (
    <div className="flex py-10 px-16  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${p2})` }}>
      <div className="flex flex-col text-center justify-center items-start space-y-4">
        <div className="text-7xl">
          <Temperature>{Math.round(data.main.temp)}</Temperature>
        </div>
        <div className="text-xl">
          <SubText>{data.weather[0].main}</SubText>
        </div>
        <Metas data={data}/>
      </div>
      <div className="flex-grow text-4xl text-right mt-4">
      {data.city}
      </div>
    </div>
  );
};

export default Current;
