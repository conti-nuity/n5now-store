import styled from "styled-components";
import { type Children } from "../../../types";

const Content = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & li:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Index = ({ children }: Children) => {
  return <Content>{children}</Content>;
};

export default Index;
