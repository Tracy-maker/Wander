import SubText from "../../../SubText/SubText";

const Meta = ({ title, children, loading }) => {
  return (
    <div className="mb-1">
      <div className="mb-1">
        {loading ? <SubText>Loading...</SubText> : <SubText>{title}</SubText>}
      </div>
      <div>
        {loading ? <SubText>Loading...</SubText> : <SubText>{children}</SubText>}
      </div>
    </div>
  );
};

export default Meta;
