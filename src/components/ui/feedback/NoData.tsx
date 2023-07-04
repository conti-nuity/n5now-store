import styled from "styled-components";
import { FEEDBACK } from "../../../constants/feedback";
import { COLORS } from "../../../constants/colors";
import { type NoData } from "../../../types";

const NotFoundMessage = styled.div`
  margin-top: 20px;
  & p {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.title};
  }
`;

const Index = ({ message }: NoData) => {
  return (
    <NotFoundMessage>
      <p>{message ? message : FEEDBACK.NOT_DATA}</p>
    </NotFoundMessage>
  );
};

export default Index;
