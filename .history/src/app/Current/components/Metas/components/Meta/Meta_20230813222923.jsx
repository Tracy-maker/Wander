import { styled } from "styled-components";
import SubText from "../../../SubText/SubText";

const Title = styled.div`
  margin-bottom: 8px;
`;

const Meta = ({ title, children }) => {
  return (
    <div>
      <Title>
        <SubText>{title}</SubText>
      </Title>
      <div>
        <SubText>{children}</SubText>
      </div>
    </div>
  );
};
export default Meta;
