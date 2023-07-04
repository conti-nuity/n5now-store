import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { FEEDBACK } from "../../../constants/feedback";
import { type Error } from "../../../types";

const LoadingMessage = styled.div`
  margin-top: 20px;
  & p {
    color: ${COLORS.ERROR};
  }
`;

const Index = ({ message }: Error) => {
  return (
    <LoadingMessage>
      <p>{message ? message : FEEDBACK.DEFAULT_ERROR}</p>
    </LoadingMessage>
  );
};

export default Index;
