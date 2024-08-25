import SubText from "../../../SubText/SubText";

const Meta = ({ title, children }) => {
  return (
    <>
      <div className="mb-1 flex-col">
        <SubText>{title}</SubText>
      </div>
      <div>
        <SubText>{children}</SubText>
      </div>
    </>
  );
};

export default Meta;
