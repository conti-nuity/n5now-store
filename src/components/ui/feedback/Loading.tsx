import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { FEEDBACK } from "../../../constants/feedback";
import { type Loading } from "../../../types";

const LoadingMessage = styled.div`
  margin-top: 20px;
  & p {
    color: ${COLORS.DARK};
  }
`;

const Index = ({ message }: Loading) => {
  return (
    <LoadingMessage>
      <p>{message ? message : FEEDBACK.DEFAULT_LOADING}</p>
    </LoadingMessage>
  );
};

export default Index;
